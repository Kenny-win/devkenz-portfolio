const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

// Memetakan rute POST ke fungsi di controller
router.post('/', sendContactEmail);

module.exports = router;