const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const ArtworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tags: [{type: String}],
  colors: [{type: String}],
  gallery: {
    type: String
  },
  featured: {
    type: Boolean,
    required: true
  },
  orientation: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  voters : [{type: ObjectId, ref: 'User'}],
  purchased: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
