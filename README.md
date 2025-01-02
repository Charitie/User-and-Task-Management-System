# User and Task Management System

## Overview
This project serves as a platform to test and enhance skills in modern web development technologies including **TypeScript**, **GraphQL**, **React**, **Node.js**, **Express**, **Testing**, and **MongoDB**. The system provides features for managing users, tasks, roles, notifications, and analytics.

---

## Features

### User Management
1. **Create User**: Add a new user to the system with relevant details.
2. **Edit User**: Update user details such as name, email, or role.
3. **Delete User (Soft Delete)**: Mark a user as inactive without permanently removing them.
4. **Fetch Users**: Retrieve a list of all users.
5. **Fetch Single User**: Get detailed information about a specific user.

---

### Task Management
6. **Create Task**: Add new tasks with title, description, and timelines.
7. **Edit Task**: Update task details, including title and description.
8. **Assign Task to User (Admin)**: Assign a task to a user with administrative privileges.
9. **Unassign Task**: Remove an assigned task from a user.
10. **Update Task Status**: Change the status of a task between `ToDo`, `Doing`, and `Done`.
11. **Fetch User's Task**: Retrieve all tasks assigned to a specific user.

---

### Roles
12. **User Roles**: Define roles such as:
    - **Admin**: Manage users and tasks.
    - **User**: Perform tasks and view assigned tasks.

---

### Notifications
13. **New Task Notification**: Notify users when a new task is assigned.

---

### Analytics
14. **Task Completion Rate**: Measure the percentage of tasks completed by a user.
15. **Performance Rate**: Evaluate performance based on a 1-5 rating system:
    - **5 (Excellent)**: Green
    - **4 (Best)**: Light Green
    - **3 (Good)**: Yellow-Green
    - **2 (Bad)**: Yellow
    - **1 (Worst)**: Red

---

### Additional Features
16. **Task Timelines**: Manage task deadlines and durations.

---

## Technologies Used
- **Frontend**: React.js, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **GraphQL**: For API design and querying
- **Testing**: To ensure code quality and reliability
- **Authentication**: JSON Web Tokens (JWT)
- **Notifications**: Websockets/Email

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```plaintext
   DATABASE_URL=<your_database_url>
   JWT_SECRET=<your_secret_key>
   ```
4. Run the application:
   ```bash
   npm start
   ```

---

## API Endpoints

### Users
- **POST** `/users` - Create a new user.
- **PUT** `/users/:id` - Edit user details.
- **DELETE** `/users/:id` - Soft delete a user.
- **GET** `/users` - Fetch all users.
- **GET** `/users/:id` - Fetch a single user.

### Tasks
- **POST** `/tasks` - Create a task.
- **PUT** `/tasks/:id` - Edit task details.
- **PATCH** `/tasks/:id/status` - Update task status.
- **GET** `/tasks/user/:id` - Fetch tasks assigned to a specific user.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit changes with clear and concise messages.
4. Submit a pull request for review.

---

## License
This project is licensed under the MIT License.

---
