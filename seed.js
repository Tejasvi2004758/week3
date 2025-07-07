const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/edyoda_ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const products = [
  {
    name: "Men's Cotton T-Shirt",
    brand: "Levis",
    price: 999,
    description: "Soft and comfortable cotton t-shirt for men.",
    preview: "https://example.com/image1.jpg",
    photos: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
    isAccessory: false
  },
  {
    name: "Women's Sunglasses",
    brand: "Ray-Ban",
    price: 2499,
    description: "Stylish sunglasses for women.",
    preview: "https://example.com/image3.jpg",
    photos: [
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg"
    ],
    isAccessory: true
  }
];

Product.insertMany(products)
  .then(() => {
    console.log('Dummy products inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.log('Error inserting products:', err);
    mongoose.disconnect();
  });