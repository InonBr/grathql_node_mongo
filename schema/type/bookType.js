const graphql = require('graphql');
const authorSchema = require('../../models/author');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authorSchema.findById(parent.authorId);
      },
    },
  }),
});

module.exports = BookType;

const AuthorType = require('./authorType');
