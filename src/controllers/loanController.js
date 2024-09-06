const Book = require('../models/Book');
const Loan = require('../models/Loan');
const sendEmail = require('../utils/sendEmail');

const borrowBook = async (req, res) => {
  const { bookId } = req.body;
  const userId = req.user.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    if (!book.available) {
      return res.status(400).json({ msg: 'Book is not available' });
    }

    const newLoan = new Loan({
      book: bookId,
      user: userId,
      borrowDate: new Date(),
      returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    });

    await newLoan.save();
    book.available = false;
    await book.save();

    // Send email notification
    sendEmail(
      req.user.email,
      'Book Borrowed',
      `You have borrowed the book "${book.title}". Please return it by ${newLoan.returnDate}.`
    );

    res.json(newLoan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const returnBook = async (req, res) => {
  const { loanId } = req.body;
  try {
    const loan = await Loan.findById(loanId);
    if (!loan) {
      return res.status(404).json({ msg: 'Loan not found' });
    }

    const book = await Book.findById(loan.book);
    book.available = true;
    await book.save();

    await Loan.findByIdAndRemove(loanId);

    res.json({ msg: 'Book returned' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getLoans = async (req, res) => {
  const userId = req.user.id;
  try {
    const loans = await Loan.find({ user: userId }).populate('book');
    res.json(loans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  borrowBook,
  returnBook,
  getLoans,
};
