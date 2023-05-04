const express = require("express");

const router = express.Router()

const {getAllProducts, createProduct} = require('../api/product-api')


router.route('/').get(getAllProducts)

module.exports = router;