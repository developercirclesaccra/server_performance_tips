const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserIndexedSchema = new Schema(
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
    collection: "users_indexed",
  }
);

module.exports = UserIndexed = mongoose.model(
  "users_indexed",
  UserIndexedSchema
);
