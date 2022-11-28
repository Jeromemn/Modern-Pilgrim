const mongoose = require("mongoose");

const { Schema } = mongoose;
const Post = require("./Post");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },
  posts: [Post],
});

const User = mongoose.model("User", userSchema);

module.exports = User;