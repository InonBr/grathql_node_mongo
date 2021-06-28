const graphql = require('graphql');
const bookSchema = require('../../models/books');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } =
  graphql;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return bookSchema.find({ authorId: parent.id });
      },
    },
  }),
});

module.exports = AuthorType;

const BookType = require('./bookType');
