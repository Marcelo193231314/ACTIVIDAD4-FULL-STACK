const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const auth = require('../middlewares/authMiddleware');


router.get('/', matchController.getMatches);


router.post('/', auth, matchController.createMatch);


router.put('/:id', auth, matchController.updateScore);

module.exports = router;