const graphql = require('graphql');
const bookSchema = require('../../models/books');
const bookType = require('../type/bookType');

const { GraphQLString, GraphQLID } = graphql;

const addBook = {
  type: bookType,
  args: {
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: { type: GraphQLID },
  },

  resolve(parent, args) {
    const { name, genre, authorId } = args;
    const book = new bookSchema({
      name,
      genre,
      authorId,
    });

    return book.save();
  },
};

module.exports = addBook;
