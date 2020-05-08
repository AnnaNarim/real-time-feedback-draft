const { GraphQLServer } = require('graphql-yoga')
require('dotenv').config()
const { prisma } = require('./generated/prisma-client')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

const options = {
	port: process.env.PORT || 4000,
}

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`));
