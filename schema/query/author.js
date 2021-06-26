const graphql = require('graphql');
const _ = require('lodash');
const AuthorType = require('../type/authorType');

const { GraphQLID, GraphQLList } = graphql;

// dummy data
const dummyAuthors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Brandon Sanderson', age: 42, id: '2' },
  { name: 'Terry Pratchett', age: 66, id: '3' },
];

const getAuthorByid = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    // will get from the db
    return _.find(dummyAuthors, { id: args.id });
  },
};

const getAllAuthors = {
  type: new GraphQLList(AuthorType),
  resolve() {
    return dummyAuthors;
  },
};

module.exports = { getAuthorByid, getAllAuthors, dummyAuthors };
