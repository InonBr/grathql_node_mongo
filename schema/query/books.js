const graphql = require('graphql');
const _ = require('lodash');
const BookType = require('../type/bookType');
const bookSchema = require('../../models/books');

const { GraphQLID } = graphql;

const getBookByid = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return bookSchema.findById(args.id);
  },
};

module.exports = getBookByid;
