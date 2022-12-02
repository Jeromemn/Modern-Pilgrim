const db = require("../config/connection");
const { User, Trip, Comment } = require("../models");

db.once("open", async () => {
  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      commentText: "Food asdjflaksjdf laksdjflkasdjf lkasjdf lk",
      commentUser: "63892926481b7df81a27bd22",
    },
    {
      commentText: "Tools asdljfalskdj flkasjdf lkjsldk jaslkdj f",
      commentUser: "63892926481b7df81a27bd24",
    },
    {
      commentText: "Bench alsdkjflkas jdflkasd jflkasd jflkasdj fkasd",
      commentUser: "63892926481b7df81a27bd22",
    },
    {
      commentText: "Fork laksdjf laksdjflkasjdflkasj dlksdjf",
      commentUser: "63892926481b7df81a27bd24",
    },
  ]);

  console.log("comments seeded");

  await Trip.deleteMany();

  await Trip.insertMany([
    {
      user: "63892926481b7df81a27bd22",
      location: "Tin of  Cookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 8,
      comments: [comments[0]._id, comments[1]._id],
    },
    {
      user: "63892926481b7df81a27bd24",
      location: "Tin ookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 7,
    },
    {
      user: "63892926481b7df81a27bd24",
      location: "Tiookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 5,
      comments: [comments[2]._id, comments[3]._id],
    },
    {
      user: "63892926481b7df81a27bd22",
      location: "Tiokies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 4,
    },
  ]);

  console.log("products seeded");

  // await User.deleteMany();

  // await User.create({
  //   username: "Pamela",
  //   email: "pamela@testmail.com",
  //   trip: [trip[0]._id],
  // 63892926481b7df81a27bd22
  // });

  // await User.create({
  //   username: "Elijah",
  //   email: "eholt@testmail.com",
  //   trip: [trip[2]._id],
  // 63892926481b7df81a27bd24
  // });

  const userData = await User.find({});
  const tripData = await Trip.find({});
  const commentData = await Comment.find({});

  console.log(`users seeded`);
  console.log(userData);
  console.log(tripData);
  console.log(commentData);

  process.exit();
});
