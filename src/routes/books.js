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


/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.post('/', [auth, adminAuth], addBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The updated book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.put('/:id', [auth, adminAuth], updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Book id
 *     responses:
 *       200:
 *         description: Book removed
 */
router.delete('/:id', [auth, adminAuth], deleteBook);

/**
 * @swagger
 * /api/books/search:
 *   get:
 *     summary: Search books
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Book title
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         description: Book author
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Book genre
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/search', searchBooks);


module.exports = router;
