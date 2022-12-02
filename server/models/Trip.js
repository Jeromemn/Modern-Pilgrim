const mongoose = require("mongoose");

const { Schema } = mongoose;

const tripSchema = new Schema({
  username: {
    type: String,
    required: true,
    // ref: "Username",
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
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    // required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
