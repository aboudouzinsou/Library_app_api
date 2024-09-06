# 📚 Library Management API

## 📝 Description

The Library Management API is a web application that allows users to manage an online library. Users can add, delete, update, and search for books. The application also enables users to lend books to others and track borrowed books.

## 🌟 Features

- **🔐 Authentication and Authorization:**
  - 📝 User registration and login.
  - 👥 Role management (administrator, user).

- **📚 Book Management:**
  - ➕ Add, ✏️ update, ❌ delete books.
  - 🔍 Search for books by title, author, genre, etc.

- **📖 Book Lending:**
  - 📤 Lend books to other users.
  - 📅 Track borrowed books and their return dates.

- **📧 Notifications:**
  - 📬 Send email reminders for book return dates.

- **🌐 RESTful API:**
  - 🔗 Create endpoints for all the above functionalities.
  - 📡 Use appropriate HTTP methods (GET, POST, PUT, DELETE).

- **📄 API Documentation:**
  - 📚 Complete API documentation with Swagger.

## 🛠️ Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB 
- **Authentication:** JWT (JSON Web Tokens)
- **Notifications:** Nodemailer for emails
- **API Documentation:** Swagger
- **Environment Variable Management:** dotenv, cross-env
- **Scheduled Tasks:** node-cron

## 🚀 Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

### Installation Steps

1. **📥 Clone the Repository:**
   ```bash
   git clone https://github.com/aboudouzinsou/library-management.git
   cd library-management
   ```

2. **📦 Install Dependencies:**
   ```bash
   npm install
   ```

3. **⚙️ Configure Environment Variables:**
   - Create a `.env.development` file for development environment variables.
   - Create a `.env.production` file for production environment variables.

   Example `.env.development`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/library_dev
   JWT_SECRET=your_jwt_secret_dev
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

   Example `.env.production`:
   ```env
   PORT=8080
   MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/library_prod
   JWT_SECRET=your_jwt_secret_prod
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **▶️ Start the Application:**
   - For development mode:
     ```bash
     npm run dev
     ```
   - For production mode:
     ```bash
     npm start
     ```

## 📖 Usage

### 🌐 API Endpoints

- **🔐 Authentication:**
  - `POST /api/auth/register` : Register a new user.
  - `POST /api/auth/login` : Log in a user.

- **📚 Book Management:**
  - `GET /api/books` : Get all books.
  - `POST /api/books` : Add a new book (admin only).
  - `PUT /api/books/:id` : Update a book (admin only).
  - `DELETE /api/books/:id` : Delete a book (admin only).
  - `GET /api/books/search` : Search for books by title, author, genre, etc.

- **📖 Book Lending:**
  - `POST /api/loans/borrow` : Borrow a book.
  - `POST /api/loans/return` : Return a book.
  - `GET /api/loans` : Get all loans of the current user.

### 📄 API Documentation

The API documentation is available at the following address:
```
http://localhost:5000/api-docs
```

I hope this makes your project more appealing! If you have any other questions or needs, feel free to ask. 😊

## Contribution

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the Apache 2.0 LICENSE  See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or suggestions, please contact [faboudou.zinsou@gmail.com](mailto:faboudou.zinsou@gmail.com).

---

Thank you for checking out this project! I hope you found it useful and interesting. Feel free to reach out with any questions or suggestions.
