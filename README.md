# 📚 School Management API

A Node.js REST API to manage school data, allowing users to add schools and retrieve them sorted by proximity to a given location.

---

## 🚀 Features

* Add new schools with location details
* Fetch schools sorted by distance (nearest first)
* Uses geographical distance calculation (Haversine formula)
* Connected to MySQL database (Railway)
* Deployed and publicly accessible

---

## 🛠️ Tech Stack

* Backend: Node.js, Express.js
* Database: MySQL (Railway)
* Hosting: Render
* Testing: Postman

---

## 🌐 Base URL

```
https://school-management-api-ke2d.onrender.com
```

---

## 📌 API Endpoints

### 1️⃣ Add School

**POST** `/addSchool`

Adds a new school to the database.

#### Request Body:

```json 
{
  "name": "ABC School",
  "address": "Chandigarh",
  "latitude": 30.7333,
  "longitude": 76.7794
}
```

#### Response:

```json 
{
  "message": "School added successfully",
  "id": 1
}
```

---

### 2️⃣ List Schools

**GET** `/listSchools`

Fetches all schools sorted by proximity to the user's location.

#### Query Params:

```
latitude=30.7333
longitude=76.7794
```

#### Example Request:

```
/listSchools?latitude=30.7333&longitude=76.7794
```

#### Response:

```json 
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Chandigarh",
    "latitude": 30.7333,
    "longitude": 76.7794,
    "distance": 0
  }
]
```

---

## 📐 Distance Calculation

This project uses the **Haversine Formula** to calculate the distance between two geographical points.

---

## 🗄️ Database Schema

```sql 
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

---

### 2. Install dependencies

```bash 
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```env 
MYSQLHOST=your_host
MYSQLPORT=your_port
MYSQLUSER=your_user
MYSQLPASSWORD=your_password
MYSQLDATABASE=your_database
PORT=5000
```

---

### 4. Run the server

```bash 
npm start
```

---

## 📮 Postman Collection

Test APIs using Postman:

👉 [https://www.postman.com/codinglearner817-7790053/workspace/school-management-system/documentation/47778380-42686763-fe3a-47ed-8a26-6e43bc5f15ea](https://www.postman.com/codinglearner817-7790053/workspace/school-management-system/documentation/47778380-42686763-fe3a-47ed-8a26-6e43bc5f15ea)

---

## ✅ Status

✔ API working
✔ Database connected
✔ Deployment successful

---

## 📌 Notes

* Latitude and longitude must be valid numbers
* Schools are sorted based on nearest distance
* Designed as a minimal and functional API for assignment purposes


