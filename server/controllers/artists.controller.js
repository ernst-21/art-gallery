const Artist = require('../models/artist.model');
const errorHandler = require('../helpers/dbErrorHandler');

const listArtists = async (req, res) => {
  try {
    let artists = await Artist.find().select('name artworks category _id discipline likes recommended pic country');
    res.json(artists);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listByDiscipline = async (req, res) => {
  const discipline = req.params.discipline;
  let artists;
  try {
    if (discipline === 'all') {
      artists = await Artist.find().select('name artworks category _id discipline likes recommended pic country about');
    } else {
      artists = await Artist.find({discipline: discipline}).select('name artworks category _id discipline likes recommended pic country about');
    }
    res.json(artists);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const artistByID = async (req, res, next, id) => {
  try {
    let artist = await Artist.findById(id);
    if (!artist)
      return res.status('400').json({
        error: 'Artist not found'
      });
    req.profile = artist;
    next();
  } catch (err) {
    return res.status('400').json({
      error: 'Could not retrieve artist'
    });
  }
};

const readArtist = (req, res) => {
  return res.json(req.profile);
};

const likeArtist = async (req, res) => {
  await Artist.findByIdAndUpdate(
    req.params.artistId,
    {
      $push: { likes: req.auth._id }
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

const unLikeArtist = async (req, res) => {
  await Artist.findByIdAndUpdate(
    req.params.artistId,
    {
      $pull: { likes: req.auth._id }
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

const userArtists = async (req, res) => {
  let userId = req.body.userId;
  try {
    let foundArtists = await Artist.find({ 'likes': { $in: userId } }).select('name _id discipline country likes pic' );
    res.json(foundArtists);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

const searchArtists = async (req, res) => {
  let recommended = req.body.recommended;
  let likes = req.body.likes;
  let discipline = req.body.discipline;
   try {
    let foundArtist = await Artist.find({
      $and: [{recommended: {$in: recommended}}, {$expr: {$gte: [{$size: "$likes"}, likes[0]]}} , {$expr: {$lte: [{$size: "$likes"}, likes[1]]}}, {discipline: {$in: discipline}}]
    }).select('name artworks category _id discipline likes recommended pic country');
    res.json(foundArtist);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};

exports.listArtists = listArtists;
exports.listByDiscipline = listByDiscipline;
exports.artistByID = artistByID;
exports.readArtist = readArtist;
exports.likeArtist = likeArtist;
exports.unLikeArtist = unLikeArtist;
exports.userArtists = userArtists;
exports.searchArtists = searchArtists;
