function interceptor (message, callback) {
  console.log(message)
  callback(false)
}

export default interceptor
