const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { singleClass } = require('./Mutation/class')
const {attendee} = require('./Mutation/attendee')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Post } = require('./Post')
const { Class } = require('./Class')
const { Answer } = require('./Answer');
const {Field} = require('./Field');

const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');


module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...singleClass,
    ...attendee
  },
  Field,
  Answer,
  Subscription,
  User,
  Post,
  Class,
  Date    : new GraphQLScalarType({
    name        : 'Date',
    description : 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.INT) {
        return new Date(+ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
};
