const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  commentUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
