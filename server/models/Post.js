const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  summary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
