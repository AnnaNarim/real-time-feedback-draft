const Class = {
    post      : ({id}, args, context) => {
        return context.prisma.class({id}).post()
    },
    attendees : ({id}, args, context) => {
        return context.prisma.class({id}).attendees()
    }
};

module.exports = {
    Class,
}
