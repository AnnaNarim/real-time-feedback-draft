const Attendee = {
    createdAt : ({id}, args, context) => {
        return context.prisma.attendee({id}).createdAt()
    },
    class     : ({id}, args, context) => {
        return context.prisma.attendee({id}).class()
    },
};

module.exports = {
    Attendee,
};
