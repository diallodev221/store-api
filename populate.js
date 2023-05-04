require('dotenv').config()

const connectDB = require('./database/connect')
const Product = require('./models/product-model');

const jsonProducts = require('./shared/products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    // await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('DB connected successful');
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

start()