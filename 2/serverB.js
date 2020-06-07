const express = require("express");
const redis = require("redis");
const app = express();
const connectDatabase = require("../db");
const PORT = 3001;

connectDatabase();
// Model
const User = require("../models/User");

// Create and connect redis client to local instance.
const client = redis.createClient(6379);

// Log redis when connected
client.on("ready", () => {
  console.log("Redis cache connected on port 6379");
});

// Log redis errors to the console
client.on("error", (err) => {
  console.log("Error " + err);
});

// Get users list
app.get("/users", (req, res) => {
  // Key to store results in Redis store
  const usersRedisKey = "users";

  // Try fetching the result from Redis first in case we have it cached
  return client.get(usersRedisKey, async (err, cachedUsers) => {
    // If that key exists in Redis store
    if (cachedUsers)
      return res.json({ source: "cache", data: JSON.parse(cachedUsers) });

    // Fetch directly from database
    const users = await User.find({});

    // Key does not exist in Redis store so save to cache
    client.setex(usersRedisKey, 3600, JSON.stringify(users));

    return res.json({ source: "database", data: users });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
