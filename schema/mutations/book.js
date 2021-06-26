const graphql = require('graphql');
const bookSchema = require('../../models/books');
const bookType = require('../type/bookType');

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

const addBook = {
  type: bookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLID) },
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
