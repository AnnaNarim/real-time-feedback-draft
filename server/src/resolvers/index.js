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
  Class
};
