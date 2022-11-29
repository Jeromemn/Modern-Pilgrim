const { User, Post, Comment } = require("../models");

const resolvers = {
  Query: {
    getPosts: async () => {
      return await Post.find();
    },
    getPost: async (parent, { _id }) => {
      return await Post.findById(_id);
    },
    getComments: async () => {
      return await Comment.find();
    },
    getUser: async (parent, { _id }) => {
      return await User.findById(_id);
    },
    searchPost: async (parent, { value }) => {
      return await Post.find({ location: `${value}` }).exec();
    },
    getPrices: async (parent, { search }) => {
      return await Post.find({ price: `${search}` }).exec();
    },
    getRating: async (parent, { search }) => {
      return await Post.find({ rating: `${search}` }).exec();
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
    updateUser: async (_, { _id }) => {
      if (_id) {
        return await User.findByIdAndUpdate(_id, args, {
          new: true,
        });
      }
    },
    updatePost: async (_, { _id }) => {
      if (_id) {
        return await Post.findByIdAndUpdate(_id, args, {
          new: true,
        });
      }
    },
    deletePost: async (parent, { _id }) => {
      return await Post.findByIdAndRemove(_id);
    },
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
