module.exports = {
  generalErrorHandler (err, req, res, next) {
    if (err instanceof Error) {
      req.flash('error_messages', `${err.name}: ${err.message}`)
    } else {
      req.flash('error_messages', `${err}`)
    }
    res.redirect('back') // 把訪問重新定向 req header 的 referer:
    next(err) // 傳到下一個middleware 目前沒有功用，只是示範
  }
}

// 我們使用 new Error 創造出來的就是 instance of Error
// 如果只是使用 next('something went wrong') 這樣也是error, 可是就不是 instance of Error, err.name 是 undefined
