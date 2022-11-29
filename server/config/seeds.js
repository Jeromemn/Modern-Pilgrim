const db = require("./connection");
const { User, Post, Comment } = require("../models");

db.once("open", async () => {
  await Comment.deleteMany();

  await Comment.insertMany([
    { commentText: "Food", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Tools", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Bench", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Fork", commentUser: "63866715a7f9cb9e7bba13be" },
  ]);

  console.log("comments seeded");

  await Post.deleteMany();

  await Post.insertMany([
    {
      user: "63866715a7f9cb9e7bba13be",
      location: "Tin of Cookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 8,
    },
    {
      user: "63866715a7f9cb9e7bba13be",
      location: "Tin ookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 7,
    },
    {
      user: "63866715a7f9cb9e7bba13c0",
      location: "Tiookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 5,
    },
    {
      user: "63866715a7f9cb9e7bba13c0",
      location: "Tiokies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 4,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "Pamela",
    email: "pamela@testmail.com",
  });

  await User.create({
    username: "Elijah",
    email: "eholt@testmail.com",
  });

  const userData = await User.find({});

  console.log(`users seeded`);
  console.log(userData);

  process.exit();
});
