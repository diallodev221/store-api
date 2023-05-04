const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'product name must be provided']
  },
  price: {
    type: Number,
    require: [true, 'product price must be provided']
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'marcos', 'caressa'],
      message: '{VALUE} is not supported'
    }
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Product', ProductSchema)