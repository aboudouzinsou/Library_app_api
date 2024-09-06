const cron = require('node-cron');
const Loan = require('../models/Loan');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const checkOverdueLoans = async () => {
  const loans = await Loan.find({ status: 'borrowed' });
  loans.forEach(async (loan) => {
    if (new Date() > loan.returnDate) {
      loan.status = 'overdue';
      await loan.save();

      const user = await User.findById(loan.user);
      if (user.points > 0) {
        user.points -= 10; // Deduct points
        await user.save();

        // Send email notification
        sendEmail(
          user.email,
          'Overdue Book Reminder',
          `Your book "${loan.book.title}" is overdue. Please return it as soon as possible.`
        );
      } else {
        // Delete user and book copy if points are zero
        await User.findByIdAndRemove(user.id);
        const book = await Book.findById(loan.book);
        book.copies -= 1;
        await book.save();
        await Loan.findByIdAndRemove(loan.id);
      }
    }
  });
};

// Schedule the job to run every day at midnight
cron.schedule('0 0 * * *', checkOverdueLoans);
