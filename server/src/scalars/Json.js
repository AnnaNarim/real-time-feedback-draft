const { GraphQLObjectType } = require('graphql')
const GraphQLJSON = require('graphql-type-json')
const { GraphQLJSONObject } = require('graphql-type-json')

const Json = new GraphQLObjectType({
  name: 'MyType',

  fields: {
    myValue: { type: GraphQLJSON },
    myObject: { type: GraphQLJSONObject },
  },
});

module.exports = {
  Json,
}