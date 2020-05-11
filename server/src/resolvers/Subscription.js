const Subscription = {
  feedSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .post({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  },

  attendeeSubscription : {
    subscribe : async (parent, {classId}, context) => {
      return context.prisma.$subscribe
          .attendee({
            mutation_in : ['CREATED', 'UPDATED']
          })
          .node().class();
    },
    resolve   : payload => {
      return payload
    },
  },
}

module.exports = {Subscription};
