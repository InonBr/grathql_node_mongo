const graphql = require('graphql');
const _ = require('lodash');
const BookType = require('../type/bookType');
const bookSchema = require('../../models/books');

const { GraphQLID } = graphql;

// dummy data
const dummyBooks = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
];

const getBookByid = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    // will get from the db
    return _.find(dummyBooks, { id: args.id });
  },
};

module.exports = getBookByid;
