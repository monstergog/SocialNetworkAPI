const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// GET Route for Thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

// GET, PUT, DELETE routes for Thoughts
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// POST route for Reactions
router.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE route for Reactions
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;
