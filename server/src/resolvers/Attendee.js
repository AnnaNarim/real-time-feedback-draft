const Attendee = {
    createdAt : ({id}, args, context) => {
        return context.prisma.attendee({id}).createdAt()
    },
};

module.exports = {
    Attendee,
};
