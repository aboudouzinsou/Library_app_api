const express = require('express');
const router = express.Router();
const { auth } = require('../utils/auth');
const { borrowBook, returnBook, getLoans } = require('../controllers/loanController');

router.post('/borrow', auth, borrowBook);
router.post('/return', auth, returnBook);
router.get('/', auth, getLoans);

module.exports = router;
