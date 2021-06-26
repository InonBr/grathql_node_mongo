const graphql = require('graphql');
const _ = require('lodash');
const AuthorType = require('../type/authorType');
const authorSchema = require('../../models/author');

const { GraphQLID, GraphQLList } = graphql;

const getAuthorByid = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return authorSchema.findById(args.id);
  },
};

const getAllAuthors = {
  type: new GraphQLList(AuthorType),
  resolve() {
    return authorSchema.find({});
  },
};

module.exports = { getAuthorByid, getAllAuthors };
