const User = require('../models/user.model');
const transporter = require('../config/nodemailerConfig');
const crypto = require('crypto');
const errorHandler = require('../helpers/dbErrorHandler');

const create = async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({ message: 'Account successfully created! Please sign in' });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};
const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created pic');
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status('400').json({
        error: 'User not found'
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status('400').json({
      error: 'Could not retrieve user'
    });
  }
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;

  return res.json(req.profile);
};

const update = async (req, res, next) => {
  try {
    let user = req.profile;
    const { name, email, password, pic } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.hashed_password = user.encryptPassword(password);
    } else {
      user.hashed_password = user.hashed_password;
    }
    user.pic = pic;
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error:
        'Something went wrong and your account could not be updated. Please input your data again.'
    });
  }
};

const remove = async (req, res, next) => {
  try {
    let user = req.profile;
    let deletedUser = await user.remove();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const retrieve = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString('hex');
    let verificationLink = `http://localhost:3000/reset/edit/${token}`;
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        res.status(422).json({ error: 'User not found' });
      } else {
        user.resetToken = token;
        user.expireToken = Date.now() + 3600000;
        user.save().then(result => {
          try {
            let mailOptions = {
              from: '"Password Retrieve" <no-reply@gmail.com>',
              to: user.email,
              subject: `Password retrieve for: ${user.name}`,
              html: `<p>Hi, please click on the following link to set your new password <a href="${verificationLink}">Click here</a>. The token contained in the link will expire in one hour. After that time you will need to request a new token via e-mail.</p>`
            };
            transporter.sendMail(mailOptions);
            return res.status(250).json({ message: 'Email sent successfully. Please check your email.' });
          } catch (err) {
            console.log(err);
            res.status(400).json({ error: error });
          }
        });
      }
    });
  });
};

const reset = async (req, res) => {
  const token = req.params.token;
  try {
    let user = await User.findOne({ resetToken: token, expireToken: { $gt: Date.now() } });
    const newPassword = req.body.password;
    if (!user) {
      return res.status(422).json({ error: 'User not found or token expired. Please request a token to reset your password' });
    }
    if (newPassword) {
      user.hashed_password = user.encryptPassword(newPassword);
    } else {
      user.hashed_password = user.hashed_password;
    }
    user.updated = Date.now();
    await user.save();
    return res.json({ message: 'Password Reset Successful. Please sign in.' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

exports.create = create;
exports.list = list;
exports.userByID = userByID;
exports.read = read;
exports.update = update;
exports.remove = remove;
exports.retrieve = retrieve;
exports.reset = reset;
