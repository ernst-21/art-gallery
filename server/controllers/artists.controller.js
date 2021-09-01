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
      artists = await Artist.find().select('name artworks category _id discipline likes recommended pic country');
    } else {
      artists = await Artist.find({discipline: discipline}).select('name artworks category _id discipline likes recommended pic country');
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
        error: 'User not found'
      });
    req.profile = artist;
    next();
  } catch (err) {
    return res.status('400').json({
      error: 'Could not retrieve artwork'
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

const unLikeArtist = async (req, res) => {
  await Artist.findByIdAndUpdate(
    req.params.artistId,
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

exports.listArtists = listArtists;
exports.listByDiscipline = listByDiscipline;
exports.artistByID = artistByID;
exports.readArtist = readArtist;
exports.likeArtist = likeArtist;
exports.unLikeArtist = unLikeArtist;
