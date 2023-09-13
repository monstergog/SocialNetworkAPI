const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// GET Route for Users
router.route('/')
.get(getUsers)
.post(createUser);

// GET, PUT, DELETE routes for Users
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// POST and DELETE route for Users
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;
