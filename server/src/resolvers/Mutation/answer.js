const answer = {
  async createAnswer(parent, {value, answers, fieldId}, context) {
    return context.prisma.createAnswer({
      value,
      author
      // field : {connect : {id : fieldId}},
    })
  },
};

module.exports = {answer};
