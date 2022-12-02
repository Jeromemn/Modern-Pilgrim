const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const Trip = require("./Trip");

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
    // using auto0 sub id 
  },
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
      ref: "Trip",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
