// src/routes/books.js
const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../utils/auth');
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
} = require('../controllers/bookController');

router.get('/', getBooks);
router.post('/', [auth, adminAuth], addBook);
router.put('/:id', [auth, adminAuth], updateBook);
router.delete('/:id', [auth, adminAuth], deleteBook);
router.get('/search', searchBooks);

module.exports = router;
