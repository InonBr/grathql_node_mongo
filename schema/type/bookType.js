const graphql = require('graphql');
const AuthorType = require('./authorType');
const authorSchema = require('../../models/author');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authorSchema.findById(parent.authorId);
      },
    },
  }),
});

module.exports = BookType;
