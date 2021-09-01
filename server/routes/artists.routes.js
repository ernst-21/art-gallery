const express = require('express');
const authCtrl = require('../controllers/auth.controller')
const artistCtrl = require('../controllers/artists.controller')

const router = express.Router();

router.route('/api/artists').get(artistCtrl.listArtists);
router.route('/api/artists/:discipline').get(artistCtrl.listByDiscipline);

router.route('/api/artists/like/:artistId').put(authCtrl.requireSignin, artistCtrl.likeArtist);

router.route('/api/artists/unlike/:artistId').put(authCtrl.requireSignin, artistCtrl.unLikeArtist);

router.param('artistId', artistCtrl.artistByID);

router.route('/api/artists/:artistId').get(artistCtrl.readArtist);

module.exports = router;
