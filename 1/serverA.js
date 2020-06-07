const express = require("express");
const app = express();
const connectDatabase = require("../db");
const PORT = 3000;

// Models
const User = require("../models/User");
// const UserIndexed = require("../models/UserIndexed");

// Express body parser middleware
app.use(express.urlencoded({ limit: "60mb", extended: false }));
app.use(express.json({ limit: "60mb", extended: false }));

(async function () {
  await connectDatabase();
})();

app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Welcome to the Node on Steroids: 3 Tips to improve your node server performance",
  });
});

app.get("/users/:last_name", async (req, res) => {
  try {
    const users = await User.find({
      last_name: req.params.last_name,
    });

    return res.status(200).json({
      message: "Successfully queried users",
      data: users,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
