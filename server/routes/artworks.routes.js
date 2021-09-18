const express = require('express');
const authCtrl = require('../controllers/auth.controller')
const artworkCtrl = require('../controllers/artworks.controllers')

const router = express.Router();

router.route('/api/artworks').get(artworkCtrl.listArtworks);
router.route('/api/artworks/featured').get(artworkCtrl.listFeatured);
router.route('/api/artworks/purchased/:userId').get(artworkCtrl.listPurchased);

router.route('/api/artworks/cart/add').put(authCtrl.requireSignin, artworkCtrl.addArtworkToCart);

router.route('/api/artworks/cart/remove').put(authCtrl.requireSignin, artworkCtrl.removeArtworkFromCart);

router.route('/api/artworks/cart/cartArtworks').post(artworkCtrl.listCartItems);

router.route('/api/artworks/vote').put(authCtrl.requireSignin, artworkCtrl.voteArtwork);

router.route('/api/artworks/unvote').put(authCtrl.requireSignin, artworkCtrl.unVoteArtwork);

router.route('/api/artworks/artistArtworks').post(artworkCtrl.artistArtworks);

router.route('/api/artworks/userArtworks').post(artworkCtrl.userArtworks);
router.route('/api/artworks/search/searchArtworks').post(artworkCtrl.searchArtworks);
router.route('/api/artworks/purchase/buyArtworks').put(authCtrl.requireSignin, artworkCtrl.purchaseArtworks);

router.route('/api/artworks/similarArtworks').post(artworkCtrl.similarArtworks);

router.param('artworkId', artworkCtrl.artworkByID);

router.route('/api/artworks/:artworkId').get(artworkCtrl.readArtwork);

module.exports = router;
