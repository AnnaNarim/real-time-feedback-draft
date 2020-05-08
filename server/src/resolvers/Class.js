const Class = {
    post : ({id}, args, context) => {
        return context.prisma.class({id}).post()
    }
}

module.exports = {
    Class,
}
