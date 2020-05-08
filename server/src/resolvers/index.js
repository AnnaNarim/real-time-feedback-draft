const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { singleClass } = require('./Mutation/class')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Post } = require('./Post')
const { Class } = require('./Class')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...singleClass
  },
  Subscription,
  User,
  Post,
  Class
}
