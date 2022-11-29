const db = require("./connection");
const { User, Post, Comment } = require("../models");

db.once("open", async () => {
  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    { commentText: "Food", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Tools", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Bench", commentUser: "63866715a7f9cb9e7bba13be" },
    { commentText: "Fork", commentUser: "63866715a7f9cb9e7bba13be" },
  ]);

  console.log("comments seeded");

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      user: "63866715a7f9cb9e7bba13be",
      location: "Tin of Cookies",
      summary:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      price: 2.99,
      rating: 8,
      comments: [comments[0]._id, comments[1]._id],
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
      comments: [comments[2]._id, comments[3]._id],
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
    posts: [posts[0]._id],
  });

  await User.create({
    username: "Elijah",
    email: "eholt@testmail.com",
    posts: [posts[2]._id],
  });

  const userData = await User.find({});
  const postData = await Post.find({});
  const commentData = await Comment.find({});

  console.log(`users seeded`);
  console.log(userData);
  console.log(postData);
  console.log(commentData);

  process.exit();
});
