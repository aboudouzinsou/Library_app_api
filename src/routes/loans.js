const express = require('express');
const router = express.Router();
const { auth } = require('../utils/auth');
const { borrowBook, returnBook, getLoans } = require('../controllers/loanController');

/**
 * @swagger
 * /api/loans/borrow:
 *   post:
 *     summary: Borrow a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The loan details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Loan'
 */
router.post('/borrow', auth, borrowBook);

/**
 * @swagger
 * /api/loans/return:
 *   post:
 *     summary: Return a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               loanId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book returned
 */
router.post('/return', auth, returnBook);

/**
 * @swagger
 * /api/loans:
 *   get:
 *     summary: Get all loans for the current user
 *     responses:
 *       200:
 *         description: A list of loans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Loan'
 */
router.get('/', auth, getLoans);

module.exports = router;
