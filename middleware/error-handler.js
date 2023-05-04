
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  return res.status(404).json({msg: err})
}

module.exports = errorHandlerMiddleware;