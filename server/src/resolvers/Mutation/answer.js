const answer = {
  async createClass(parent, { value, classId }, context) {
    return context.prisma.createAnswer({
      value,
      class : { connect : { id: classId } }
    })
  },
}

module.exports = { answer }
