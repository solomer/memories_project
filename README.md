# 📘 Project Title

A simple MERN Stack application. Users can create, view, update, and delete posts.

## 🚀 Setup and Run

### 1. Clone the Repository

```bash
git clone https://github.com/solomer/memories_project
cd memories_project
```

### 2. Create a MongoDB Cluster

* Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
* Create a new **cluster**.
* Create a **database** and **user**.
* In the `Network Access` section, allow access from all IPs: `0.0.0.0/0`.
* Copy your connection string:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### 3. Set Environment Variables

Create a `.env` file inside the `server` directory:
(There is already an example .env file)

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```

### 4. Backend Setup

```bash
cd server
npm install
npm start
```

### 5. Frontend Setup

```bash
cd client
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Technologies Used

* **Frontend**: React, Redux, Axios
* **Backend**: Node.js, Express
* **Database**: MongoDB Atlas (via Mongoose)
* **Others**: dotenv, nodemon

## 📁 Folder Structure

```bash
project/
├── client/       # React frontend
├── server/       # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
└── .env          # Environment variables (you need to create this)
```

## 🧠 Features

* CRUD (Create, Read, Update, Delete) operations
* RESTful API architecture
* JSON data storage with MongoDB
* Responsive frontend

## 📌 Notes

* This project is for learning purposes. You can extend it with JWT, user authentication, etc.
* Do not upload the `.env` file to GitHub.