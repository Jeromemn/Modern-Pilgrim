const { User, Post, Comment } = require("../models");

const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find();
    },
    comments: async () => {
      return await Comment.find();
    },
    user: async (parent, { _id }) => {
      return await User.findById(_id);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    },
    addPost: async (parent, args) => {
      return await Post.create(args);
    },
    addComment: async (parent, args) => {
      return await Comment.create(args);
    },
    // updateUser: async (_, { _id }) => {
    //   if (_id) {
    //     return await User.findByIdAndUpdate(_id, args, {
    //       new: true,
    //     });
    //   }
    // },
    // updatePost: async (parent, { id }) => {

    //   return Product.findByIdAndUpdate(
    //     id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
