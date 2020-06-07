const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User1IndexedSchema = new Schema(
  {
    username: { type: String, index: true },
    last_name: { type: String, index: true },
    id: { type: String },
    email: { type: String },
    gender: { type: String },
    country: { type: String },
  },
  {
    timestamp: true,
    collection: "users1_indexed",
  }
);

module.exports = UserI1ndexed = mongoose.model(
  "users1_indexed",
  User1IndexedSchema
);
