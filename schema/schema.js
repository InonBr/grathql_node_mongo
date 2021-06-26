const graphql = require('graphql');
const _ = require('lodash');
const getBookByid = require('./query/books');
const { getAuthorByid, getAllAuthors } = require('./query/author');
const addAuthor = require('./mutations/author');
const addBook = require('./mutations/book');

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBookByid,
    getAuthorByid,
    getAllAuthors,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor,
    addBook,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
