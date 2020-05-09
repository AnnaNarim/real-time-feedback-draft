const Answer = {
    author : ({id}, args, context) => {
        return context.prisma.answer({id}).author()
    },
    // classes : ({id}, args, context) => {
    //     return context.prisma.post({id}).classes()
    // },
    field   : ({id}, args, context) => {
        return context.prisma.answer({id}).field()
    },
};

module.exports = {
    Answer,
};
