const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StorefrontSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
})

module.exports = mongoose.model('Storefront', StorefrontSchema)