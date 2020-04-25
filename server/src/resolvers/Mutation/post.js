const { getUserId } = require('../../utils')

const post = {
  async createDraft(parent, {title, content, answerType, fields}, context) {

    const userId = getUserId(context);
    const fieldIds = fields.map(item => {
      return {
        id : item.id
      }
    });
    return context.prisma.createPost({
      title,
      content,
      answerType,
      fields : {connect : fieldIds},
      author : { connect: { id: userId } },
    })
  },

  async publish(parent, { id,published }, context) {
    const userId = getUserId(context)
    const postExists = await context.prisma.$exists.post({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.updatePost(
      {
        where: { id },
        data: { published },
      },
    )
  },

  async deletePost(parent, { id }, context) {
    const userId = getUserId(context)
    const postExists = await context.prisma.$exists.post({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.deletePost({ id })
  },

  async updateDraft(parent, {id, title, content}, context) {
    const userId = getUserId(context)
    const postExists = await context.prisma.$exists.post({
      id,
      author : {id : userId},
    });
    if(!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.updatePost(
        {
          where : {id},
          data  : {title, content},
        },
    )
  },
}

module.exports = { post }
