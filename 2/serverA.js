const express = require("express");
const redis = require("redis");
const app = express();
const connectDatabase = require("../db");
const PORT = 3000;

connectDatabase();
// Model
const User = require("../models/User");

// Get users list
app.get("/users", async (req, res) => {
  // Fetch directly from database every single time
  const users = await User.find({});

  return res.json({ source: "database", data: users });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
