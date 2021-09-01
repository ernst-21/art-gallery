const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artworks : [{type: ObjectId, ref: 'Artwork'}]
});

module.exports = mongoose.model('Gallery', GallerySchema);
