const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artworks : [{type: ObjectId, ref: 'Artwork'}],
  recommended: {
    type: Boolean,
    required: true
  },
  about: {type: String, required: true},
  pic: {
    type: String,
    required: true
  },
  discipline: {type:String},
  country: {
    type: String,
    required: true
  },
  likes : [{type: ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Artist', ArtistSchema);
