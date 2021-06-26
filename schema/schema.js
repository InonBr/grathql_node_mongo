const graphql = require('graphql');
const _ = require('lodash');
const getBookByid = require('./query/books');
const { getAuthorByid, getAllAuthors } = require('./query/author');

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBookByid,
    getAuthorByid,
    getAllAuthors,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
