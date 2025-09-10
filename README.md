# Backend README

# MERN Auth Dashboard

This project is a MERN stack application that focuses on user authentication, role-based access control, and CRUD functionality for a dashboard. It utilizes MongoDB for the backend and provides an interactive interface for users.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd mern-auth-dashboard/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables. Create a `.env` file in the backend directory and add the following:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

5. Start the server:
   ```
   npm start
   ```

## Usage

Once the server is running, you can access the API endpoints for user authentication and dashboard management. Use tools like Postman or Insomnia to test the endpoints.

## API Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Log in an existing user.
- **GET /verify-email/:token**: Verify user email using a token.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)

This README provides an overview of the backend setup and usage for the MERN Auth Dashboard project.