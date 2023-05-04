const Product = require("../models/product-model");



const getAllProducts = async (req, res) => {
  const { featured, company } = req.params;
  const queryObject = {}
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  const products = await Product.find(queryObject);

  res.status(200).json({ products, nbHits: products.length });
};

const getProductsBySearch = async (req, res) => {
  const search = 'ab';
  const products = await Product.find({
    name: { $regex: search, $options: 'i' }
  })
  res.status(200).json({ products, nbHits: products.length });

}

const createProduct = async (req, res) => {
  console.log(req.params);
  res.status(201).json({ data: req.body });
};

module.exports = { getAllProducts, createProduct };
