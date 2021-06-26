const graphql = require('graphql');
const _ = require('lodash');
const getBookByid = require('./query/books');

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBookByid,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
