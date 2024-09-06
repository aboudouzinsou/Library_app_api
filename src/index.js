const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const loanRoutes = require('./routes/loans');
const { swaggerUi, specs } = require('./swagger');
const dotenv = require('dotenv');

// Load environment variables
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '../.env.production' });
} else {
  dotenv.config({ path: '../.env.development' });
}

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/loans', loanRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
