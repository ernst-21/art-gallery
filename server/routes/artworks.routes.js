const express = require('express');
const authCtrl = require('../controllers/auth.controller')
const artworkCtrl = require('../controllers/artworks.controllers')

const router = express.Router();

router.route('/api/artworks').get(artworkCtrl.listArtworks);
router.route('/api/artworks/category/:artCategory').get(artworkCtrl.listByCategory);

router.route('/api/artworks/vote/:artworkId').put(authCtrl.requireSignin, artworkCtrl.voteArtwork);

router.route('/api/artworks/unvote/:artworkId').put(authCtrl.requireSignin, artworkCtrl.unVoteArtwork);

router.route('/api/artworks/artistArtworks').post(artworkCtrl.artistArtworks);

router.param('artworkId', artworkCtrl.artworkByID);

router.route('/api/artworks/:artworkId').get(artworkCtrl.readArtwork);

module.exports = router;
