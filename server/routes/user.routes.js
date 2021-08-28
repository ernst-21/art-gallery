const express = require('express');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller')

const router = express.Router();

router.route('/api/users').get(userCtrl.list).post(userCtrl.create);

router.route('/api/users/reset').post(userCtrl.retrieve);

router.route('/api/users/reset-password/:token').put(userCtrl.reset);

router.param('userId', userCtrl.userByID);

router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

module.exports = router;
