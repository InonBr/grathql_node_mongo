const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

module.exports = BookType;
