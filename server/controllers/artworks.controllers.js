const Artwork = require('../models/artwork.model');
const errorHandler = require('../helpers/dbErrorHandler');

const listArtworks = async (req, res) => {
  try {
    let artworks = await Artwork.find({ 'featured': { $in: false } }).select('name artist addedToCart category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(artworks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listFeatured = async (req, res) => {
  try {
    let artworks = await Artwork.find({ 'featured': { $in: true } }).select('name artist addedToCart category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(artworks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listCartItems = async (req, res) => {
  let userId = req.body.userId;
  try {
    let artworks = await Artwork.find({ $and: [{ addedToCart: { $in: userId } }, { purchased: { $nin: userId } }] }).select('name artist addedToCart category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(artworks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listPurchased = async (req, res) => {
  const userId = req.params.userId;
  try {
    let artworks = await Artwork.find({ 'purchased': { $in: userId } }).select('name category price _id url');
    res.json(artworks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const artworkByID = async (req, res, next, id) => {
  try {
    let artwork = await Artwork.findById(id);
    if (!artwork)
      return res.status('400').json({
        error: 'Artwork not found'
      });
    req.profile = artwork;
    next();
  } catch (err) {
    return res.status('400').json({
      error: 'Could not retrieve artwork'
    });
  }
};

const readArtwork = (req, res) => {
  return res.json(req.profile);
};

const voteArtwork = async (req, res) => {
  await Artwork.findByIdAndUpdate(
    req.body.artworkId,
    {
      $push: { voters: req.auth._id }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

const unVoteArtwork = async (req, res) => {
  await Artwork.findByIdAndUpdate(
    req.body.artworkId,
    {
      $pull: { voters: req.auth._id }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

const addArtworkToCart = async (req, res) => {
  await Artwork.findByIdAndUpdate(
    req.body.artworkId,
    {
      $push: { addedToCart: req.auth._id }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

const removeArtworkFromCart = async (req, res) => {
  await Artwork.findByIdAndUpdate(
    req.body.artworkId,
    {
      $pull: { addedToCart: req.auth._id }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

const artistArtworks = async (req, res) => {
  let artistWork = req.body.artistWork;
  try {
    let foundArtworks = await Artwork.find({
      '_id': { $in: artistWork }, 'featured': { $in: false }

    }).select('name artist category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const userArtworks = async (req, res) => {
  let userId = req.body.userId;
  try {
    let foundArtworks = await Artwork.find({
      $and: [{ voters: { $in: userId } }, { purchased: { $nin: userId } }, { featured: { $in: false } }]

    }).select('name artist category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const similarArtworks = async (req, res) => {
  let similar = req.body.tags;
  let artworkId = req.body.artworkId;
  try {
    let foundArtworks = await Artwork.find({
      'tags': { $in: similar },
      '_id': { $nin: artworkId },
      'featured': { $in: false }
    }).select('name artist category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const searchArtworks = async (req, res) => {
  let category = req.body.category;
  let orientation = req.body.orientation;
  let size = req.body.size;
  let gallery = req.body.gallery;
  let artist = req.body.artist;
  let tags = req.body.tags;
  let colors = req.body.colors;
  let price = req.body.price;
  let voters = req.body.voters;

  try {
    let foundArtworks = await Artwork.find({
      $and: [{ category: { $in: category } }, { orientation: { $in: orientation } }, { size: { $in: size } }, { gallery: { $in: gallery } }, { artist: { $in: artist } }, { tags: { $in: tags } }, { colors: { $in: colors } }, {
        price: {
          $gt: price[0],
          $lt: price[1]
        }
      }, { $expr: { $gte: [{ $size: '$voters' }, voters[0]] } }, { $expr: { $lte: [{ $size: '$voters' }, voters[1]] } }, { featured: { $in: false } }]
    }).select('name artist category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const purchaseArtworks = async (req, res) => {
  let artworksIds = req.body.artworksIds;
  try {
    let foundArtworks = await Artwork.updateMany({ '_id': { $in: artworksIds } }, {
      $push: { purchased: req.auth._id }, $pull: { addedToCart: req.auth._id }
    }, { multi: true });
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

exports.listArtworks = listArtworks;
exports.listFeatured = listFeatured;
exports.listPurchased = listPurchased;
exports.artworkByID = artworkByID;
exports.readArtwork = readArtwork;
exports.voteArtwork = voteArtwork;
exports.unVoteArtwork = unVoteArtwork;
exports.artistArtworks = artistArtworks;
exports.similarArtworks = similarArtworks;
exports.userArtworks = userArtworks;
exports.searchArtworks = searchArtworks;
exports.addArtworkToCart = addArtworkToCart;
exports.removeArtworkFromCart = removeArtworkFromCart;
exports.listCartItems = listCartItems;
exports.purchaseArtworks = purchaseArtworks;
