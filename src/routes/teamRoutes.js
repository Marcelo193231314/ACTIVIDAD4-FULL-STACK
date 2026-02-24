const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const auth = require('../middlewares/authMiddleware');

router.get('/', teamController.getTeams);

router.post('/', auth, teamController.createTeam);

router.delete('/:id', auth, teamController.deleteTeam);

module.exports = router;