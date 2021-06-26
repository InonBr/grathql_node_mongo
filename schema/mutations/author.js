const graphql = require('graphql');
const authorSchema = require('../../models/author');
const AuthorType = require('../type/authorType');

const { GraphQLString, GraphQLInt } = graphql;

const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },

  resolve(parent, args) {
    const author = new authorSchema({
      name: args.name,
      age: args.age,
    });
    return author.save();
  },
};

module.exports = addAuthor;
