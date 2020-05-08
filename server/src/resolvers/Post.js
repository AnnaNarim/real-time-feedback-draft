const Post = {
  author  : ({ id }, args, context) => {
    return context.prisma.post({ id }).author()
  },
  classes : ({id}, args, context) => {
    return context.prisma.post({id}).classes()
  },
  fields  : ({id}, args, context) => {
    return context.prisma.post({id}).fields()
  },
};

module.exports = {
  Post,
}
