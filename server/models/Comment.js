
const { Schema, model } = require('mongoose')
const Comment = require("../models/Comment");
const Post = require('../models/Post');


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
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        },
    }],
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
