const { Schema, model } = require("mongoose");
const Comment = require("../models/Comment");
const Post = require("../models/Post");

const commentSchema = new Schema({
  comment: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
