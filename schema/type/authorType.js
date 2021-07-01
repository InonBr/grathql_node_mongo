const graphql = require('graphql');
const bookSchema = require('../../models/books');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
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
