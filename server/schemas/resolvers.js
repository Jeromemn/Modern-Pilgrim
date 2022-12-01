const { User, Trip, Comment } = require("../models");

const resolvers = {
  Query: {
    // working
    getTrips: async () => {
      return await Trip.find();
    },
    getTripById: async (parent, { _id }) => {
      return await Trip.findById(_id);
    },
    // getTrip: async (parent, { _id }) => {
    //   return await Trip.findById(_id);
    // },
    // working
    getComments: async () => {
      return await Comment.find();
    },
    getUser: async (parent, { _id }) => {
      return await User.findById(_id);
    },
    searchTrip: async (parent, { value }) => {
      return await Trip.find({ location: `${value}` }).exec();
    },
    getPrices: async (parent, { search }) => {
      return await Trip.find({ price: `${search}` }).exec();
    },
    getRating: async (parent, { search }) => {
      return await Trip.find({ rating: `${search}` }).exec();
    },
    trip: async (parent, { input = {} }, context, info) => {
      const { location, price } = input;
      const shouldApplyFilters = location || price;

      console.log(location, price);

      let trips = await Trip.find();
      // console.log(trips);

      console.log(shouldApplyFilters);

      if (!shouldApplyFilters) {
        console.log(trips);
        return trips;
      }
      const shouldApplyLocationFilter = location !== null;
      const shouldApplyPriceFilter = price;

      if (shouldApplyLocationFilter) {
        trips = trips.filter(
          (a) => a.location.toLowerCase() === location.toLowerCase()
        );
      }

      if (shouldApplyPriceFilter) {
        trips = trips.filter((a) => a.price < price);
      }
      return trips;
    },
  },
  //   Mutation: {
  //     addUser: async (parent, args) => {
  //       return await User.create(args);
  //     },
  //     addTrip: async (parent, args) => {
  //       return await Trip.create(args);
  //     },
  //     addComment: async (parent, args) => {
  //       return await Comment.create(args);
  //     },
  //     updateUser: async (_, { _id }) => {
  //       if (_id) {
  //         return await User.findByIdAndUpdate(_id, args, {
  //           new: true,
  //         });
  //       }
  //     },
  //     updateTrip: async (_, { _id }) => {
  //       if (_id) {
  //         return await Trip.findByIdAndUpdate(_id, args, {
  //           new: true,
  //         });
  //       }
  //     },
  //     deleteTrip: async (parent, { _id }) => {
  //       return await Trip.findByIdAndRemove(_id);
  //     },
  //     // updateTrip: async (parent, { id }) => {

  //     //   return Product.findByIdAndUpdate(
  //     //     id,
  //     //     { $inc: { quantity: decrement } },
  //     //     { new: true }
  //     //   );
  //     // },
  //   },
};

module.exports = resolvers;
