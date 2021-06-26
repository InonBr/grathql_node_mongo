const graphql = require('graphql');
const AuthorType = require('./authorType');
const dummyAuthors = require('../query/author');
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
      resolve(parent) {
        return _.find(dummyAuthors.dummyAuthors, { id: parent.authorId });
      },
    },
  }),
});

module.exports = BookType;
