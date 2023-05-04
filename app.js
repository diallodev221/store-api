const express = require("express");
require("dotenv").config();
require('express-async-errors')

const app = express();

const connectDB = require('./database/connect')
const productRouter = require('./routes/products-route')


const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products routes</a>');
});

app.use('/api/v1/products', productRouter)

// products routes


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 4000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is listening on port http://localhost:${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()