# 📚 Educase Backend - School Management API

A simple Node.js + Express + MySQL backend to manage school data. Users can add schools and retrieve a list of nearby schools sorted by distance.

---

## 🚀 Features

- ✅ Add a new school to the database
- 📍 Get a list of schools sorted by distance from your location
- 🛡 Input validation
- 🌐 RESTful API architecture

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv

---

## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Sarthak-Butola/educase-backend.git
   cd educase-backend

2.Install dependencies:
npm install

3.Create a .env file:
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=5000

4. Set up the MySQL table:
   CREATE TABLE IF NOT EXISTS schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
5.Start the server:
node index.js

📬 API Endpoints
➕ Add School
POST /api/addSchool

Body:
{
  "name": "School Name",
  "address": "123 Street",
  "latitude": 28.7041,
  "longitude": 77.1025
}

  📍 List Schools by Proximity
GET /api/listSchools?latitude=28.7041&longitude=77.1025

📫 Deliverables
✅ Source Code Repo: GitHub Link

✅ Live API: https://educase-backend-57fe.onrender.com

✅ Postman Collection: https://www.postman.com/orbital-module-specialist-55283890/live-apis/request/uqwn46e/live-addschool-api?action=share&source=copy-link&creator=40958190
👤 Author
Sarthak Butola
Node.js Developer • B.Tech Final Year
📧 Email: sarthakbutola@gmail.com
📱 Phone: +91 9871671202
