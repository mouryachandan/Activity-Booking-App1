# Activity Booking App - Backend API

This is a RESTful API built for an Activity Booking App, created as part of the MeetX Backend Developer Internship assignment.

## Features

- User Registration and Login with JWT Authentication
- Public listing of available activities (e.g., cricket, movies)
- Book activities (authenticated users only)
- View all bookings made by the logged-in user

## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT (JSON Web Token)
- Password Hashing: bcrypt
- Validation: express-validator

## Folder Structure

Backend/
├── config/ # MongoDB connection
├── controllers/ # Request handlers
├── middlewares/ # Auth middleware
├── models/ # Mongoose schemas
├── routes/ # Route handlers
├── .env # Environment variables
├── server.js # Entry point
└── package.json # Dependencies

Server will start on `http://localhost:5000`

## Authentication

All protected routes require a Bearer Token in headers:


## API Endpoints

### Public Routes

| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| POST   | /api/auth/register   | Register a new user        |
| POST   | /api/auth/login      | Login and receive JWT token|
| GET    | /api/activities      | Get list of all activities |

### Protected Routes (Requires Token)

| Method | Endpoint                   | Description                        |
|--------|----------------------------|------------------------------------|
| POST   | /api/bookings/:activityId  | Book an activity by ID             |
| GET    | /api/bookings/my           | Get bookings of the logged-in user |

## Postman Collection

Postman Collection Drive Link:  
[https://drive.google.com/file/d/your-file-id/view?usp=sharing](https://drive.google.com/file/d/your-file-id/view?usp=sharing)

## Live URL (if hosted)

API Live URL (Optional):  
[https://your-api.onrender.com](https://your-api.onrender.com)

## Author

- Name: Chandan Kumar  
- Email: mr.chandankumarr18@gmail.com  
- LinkedIn: https://www.linkedin.com/in/erchandann-
