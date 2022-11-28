const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const Post = require("../models/Post");

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
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
