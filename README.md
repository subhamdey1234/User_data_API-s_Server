

# User Data API  
A simple Node.js API for managing user data using CRUD operations with **Mongoose** and **Express**.

## Features
- Create a new user  
- Retrieve a list of all users or a single user by ID  
- Update user data  
- Delete a user  

## Technologies Used
- Node.js  
- Express.js  
- Mongoose (MongoDB ODM)  
- MongoDB  

---

## Prerequisites  
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  

---

## Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/subhamdey1234/User_data_API-s_Server
   cd user_data_api
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env
   MONGO_URI=mongodb://localhost:27017/userDataDB
   PORT=3000
   ```

4. **Run the server**  
   ```bash
   npm start
   ```

---

## API Endpoints

### Base URL  
```
http://localhost:3000/api/users
```

### Endpoints  

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | `/`            | Get all users          |
| GET    | `/:id`         | Get a user by ID       |
| POST   | `/`            | Create a new user      |
| PUT    | `/:id`         | Update user by ID      |
| DELETE | `/:id`         | Delete user by ID      |

---

## Example Request and Response  

### 1. Create a New User  
**Request:**  
```http
POST /api/users  
Content-Type: application/json
```
**Body:**  
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}
```

**Response:**  
```json
{
  "message": "User created successfully",
  "data": {
    "_id": "601d1b1f1c4f4e3e7c4f4e4d",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
}
```

---

## Mongoose Schema Example  
Here’s a sample of the Mongoose schema for the user model:  
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
```

---

## Error Handling  
The API handles errors for:  
- Invalid user ID  
- Missing required fields  
- Database connection issues  

Example error response:  
```json
{
  "error": "User not found"
}
```

---


## Contact  
For any inquiries or suggestions, feel free to reach out:  
- **Email:** sdey06384@gmail.com  
- **GitHub:** [Subham Dey](https://github.com/subhamdey1234)  

---

