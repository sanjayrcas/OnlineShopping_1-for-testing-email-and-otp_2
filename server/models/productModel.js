const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productsImg: {
    type: String,
    required: true
  },
  productsName: {
    type: String,
    required: true
  },
  productsCategory: {
    type: String,
    required: true
  },
  productsOriginalPrice: {
    type: Number,
    required: true
  },
  productsDescription: {
    type: String,
    required: true
  },
//   productsStatus: {
//     type: String,
//     enum: ['Available', 'OutOfStock'],
//     default: 'Available'
//   },
  productsStatus: {
    type: String,
    required: true
  },
  productQuantity: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
