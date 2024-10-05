# SoloSend Backend
This is the backend for SoloSend, an invoicing app designed for freelancers. The backend is built using Node.js and Express and handles user registration, login, and invoicing APIs. It communicates with a PostgreSQL database.

## Project Setup
### 1. Fork and Clone the Repository
First, fork the repository to your GitHub account by clicking the "Fork" button at the top right of the project repository page. Then, clone your forked repository to your local machine:
```
git clone https://github.com/yourusername/solosend-backend.git
cd solosend-backend
```
### 2. Install Dependencies
Once inside the project directory, install the necessary dependencies:
```
npm install
```
### 3. Environment Setup
Create a .env file in the root directory with the following environment variables:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=solosend_db
PORT=3000
JWT_SECRET=your_jwt_secret
```
### 4. Set Up PostgreSQL Database
Ensure PostgreSQL is running on your machine, and then create the database specified in the .env file:
```
createdb solosend_db
```
### 5. Run Database Migrations
To create the necessary tables, run the database migrations:
```
npm run migrate
```
### 6. Start the Application
After configuring the environment and setting up the database, you can start the server:
```
npm start
```
The backend will be running on http://localhost:3000.
## Features
- **User Registration**: API for registering users with email and password.
- **User Login**: API for logging in users.
- **Authentication**: JWT-based authentication system for secure access.
- **PostgreSQL Integration**: Uses PostgreSQL for storing user data and invoices.
## API Endpoints
### Authentication
`POST /api/auth/register`
Registers a new user with email and password.

`POST /api/auth/login`
Logs in a user with email and password.

## Tech Stack
- **Node.js**: Backend runtime.
- **Express**: Framework for building APIs.
- **PostgreSQL**: Database for storing user and invoice data.
- **JWT**: Token-based authentication system.
## Contributing
We welcome contributions! Please follow these steps to contribute to the project:

### 1. Create a new branch
```
git checkout -b feature-name
```
### 2. Make your changes and stage them:
```
git add .
```
### 3. Commit your changes
```
git commit -m "Add feature-name"
```
### 4. Push to your branch
```
git push origin feature-name
```
### 5. Submit a pull request
Once you submit your pull request, we will review it and merge it if everything looks good.

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
