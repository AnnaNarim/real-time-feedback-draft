const singleClass = {
  async createClass(parent, { name, postId }, context) {
    return context.prisma.createClass({
      name,
      post : { connect : { id: postId } }
    })
  },

  async publishClass(parent, { id, published }, context) {
    const classExist = await context.prisma.$exists.class({
      id
    });

    if (!classExist) {
      throw new Error(`Class not found to publish.`)
    }

    return context.prisma.updateClass(
      {
        where: { id },
        data: { published },
      },
    )
  },

  async deleteClass(parent, { id }, context) {
    const classExists = await context.prisma.$exists.class({
      id
    })
    if (!classExists) {
      throw new Error(`Class not found to delete.`)
    }

    return context.prisma.deleteClass({ id })
  },
}

module.exports = { singleClass }
