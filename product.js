const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  description: String,
  preview: String,
  photos: [String],
  isAccessory: Boolean
});
module.exports = mongoose.model('Product', ProductSchema);