const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
  }
);

module.exports = User = mongoose.model("User", UserSchema);
