const express = require('express');
const userController = require('../controller/userController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);

// router.use(authController.protect);

// router.get('/me', userController.getMe, userController.getUser);
// router.patch('/updateMyPassword', authController.updatePassword);
// router.patch('/updateUserData', userController.updateUserData);
// router.delete('/deleteCurrentUser', userController.deleteCurrentUser);

// router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteAccount);

module.exports = router;