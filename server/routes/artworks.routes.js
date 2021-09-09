const express = require('express');
const authCtrl = require('../controllers/auth.controller')
const artworkCtrl = require('../controllers/artworks.controllers')

const router = express.Router();

router.route('/api/artworks').get(artworkCtrl.listArtworks);
router.route('/api/artworks/category/:artCategory').get(artworkCtrl.listByCategory);

router.route('/api/artworks/cart/add/:artworkId').put(authCtrl.requireSignin, artworkCtrl.addArtworkToCart);

router.route('/api/artworks/cart/remove/:artworkId').put(authCtrl.requireSignin, artworkCtrl.removeArtworkFromCart);

router.route('/api/artworks/cart/cartArtworks').post(artworkCtrl.listCartItems);

router.route('/api/artworks/vote/:artworkId').put(authCtrl.requireSignin, artworkCtrl.voteArtwork);

router.route('/api/artworks/unvote/:artworkId').put(authCtrl.requireSignin, artworkCtrl.unVoteArtwork);

router.route('/api/artworks/artistArtworks').post(artworkCtrl.artistArtworks);

router.route('/api/artworks/userArtworks').post(artworkCtrl.userArtworks);
router.route('/api/artworks/search/searchArtworks').post(artworkCtrl.searchArtworks);

router.route('/api/artworks/similarArtworks').post(artworkCtrl.similarArtworks);

router.param('artworkId', artworkCtrl.artworkByID);

router.route('/api/artworks/:artworkId').get(artworkCtrl.readArtwork);

module.exports = router;
