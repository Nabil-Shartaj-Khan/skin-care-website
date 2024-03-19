const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "skincare",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Database connected successfully!");
});

// Registering a user
app.post("/api/register", (req, res) => {
  const { username, email, password, location, gender } = req.body;

  if (!username || !email || !password || !location || !gender) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const sql =
    "INSERT INTO users (username, email, password, location, gender) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [username, email, password, location, gender],
    (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ message: "Registration failed" });
      }
      console.log("User registered successfully:", result);
      res.status(201).json({ message: "Registration successful" });
    }
  );
});

// Login a user
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      return res.status(500).json({ message: "Login failed" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const userId = result[0].user_id;

    const token = jwt.sign({ userId, username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful", token, userId });
  });
});

// Book an appointment
app.post("/api/appointments", (req, res) => {
  console.log("Request received:", req.body); // Debugging

  const { mobile, date, serviceType, userId } = req.body;

  if (!mobile || !date || !serviceType || !userId) {
    // Ensure userId is provided
    return res.status(400).json({
      message: "Please provide mobile, date, service type, and user ID",
    });
  }

  const sql =
    "INSERT INTO appointments (user_id, mobile, appointment_date, service_type) VALUES (?, ?, ?, ?)";
  db.query(sql, [userId, mobile, date, serviceType], (err, result) => {
    if (err) {
      console.error("Error booking appointment:", err);
      return res.status(500).json({ message: "Failed to book appointment" });
    }
    console.log("Appointment booked successfully:", result);
    res.status(201).json({ message: "Appointment booked successfully" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
