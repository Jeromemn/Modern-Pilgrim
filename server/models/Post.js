const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  summary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Float,
    required: true,
  },
  rating: {
    type: Int,
    required: true,
  },
  comments: [],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
