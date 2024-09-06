
const Book = require('../models/Book');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      genre
    });

    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const updateBook = async (req, res) => {
  const { title, author, genre, copies } = req.body;
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    book.title = title;
    book.author = author;
    book.genre = genre;
    book.copies = copies;

    book = await book.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const searchBooks = async (req, res) => {
  const { title, author, genre } = req.query;
  try {
    const query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (author) query.author = { $regex: author, $options: 'i' };
    if (genre) query.genre = { $regex: genre, $options: 'i' };

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
};
