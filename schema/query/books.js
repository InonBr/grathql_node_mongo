const graphql = require('graphql');
const _ = require('lodash');
const BookType = require('../type/bookType');
const bookSchema = require('../../models/books');

const { GraphQLID, GraphQLNonNull, GraphQLList } = graphql;

const getBookByid = {
  type: BookType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return bookSchema.findById(args.id);
  },
};

const getAllBooks = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return bookSchema.find({});
  },
};

module.exports = { getBookByid, getAllBooks };
