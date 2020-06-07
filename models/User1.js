const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User1Schema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    id: { type: String },
    email: { type: String },
    gender: { type: String },
    country: { type: String },
  },
  {
    timestamp: true,
    collection: "users1",
  }
);

module.exports = User1 = mongoose.model("User1", User1Schema);
