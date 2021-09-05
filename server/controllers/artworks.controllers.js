const Artwork = require('../models/artwork.model');
const errorHandler = require('../helpers/dbErrorHandler');

const listArtworks = async (req, res) => {
  try {
    let artworks = await Artwork.find({'purchased': { $in: false }}).select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(artworks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listByCategory = async (req, res) => {
  const category = req.params.artCategory;
  let artworks;
  try {
    if (category === 'all') {
      artworks = await Artwork.find().select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    } else {
      artworks = await Artwork.find({ category: category }).select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    }
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
        error: 'User not found'
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
    req.params.artworkId,
    {
      $push: { voters: req.body.userId }
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
    req.params.artworkId,
    {
      $pull: { voters: req.body.userId }
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
    let foundArtworks = await Artwork.find({ '_id': { $in: artistWork } }).select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const userArtworks = async (req, res) => {
  let userId = req.body.userId;
  try {
    let foundArtworks = await Artwork.find({ 'voters': { $in: userId } }).select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const similarArtworks = async (req, res) => {
  let similar = req.body.tags;
  let artworkId = req.body.artworkId;
  try {
    let foundArtworks = await Artwork.find({ 'tags': { $in: similar }, '_id': {$nin: artworkId} }).select('name artist category price _id gallery tags colors featured orientation url voters size purchased artist_Id');
    res.json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

exports.listArtworks = listArtworks;
exports.listByCategory = listByCategory;
exports.artworkByID = artworkByID;
exports.readArtwork = readArtwork;
exports.voteArtwork = voteArtwork;
exports.unVoteArtwork = unVoteArtwork;
exports.artistArtworks = artistArtworks;
exports.similarArtworks = similarArtworks;
exports.userArtworks = userArtworks;
