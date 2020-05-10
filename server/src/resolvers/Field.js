const Field = {
    answers              : ({id}, args, context) => {
        return context.prisma.field({id}).answers()
    },
    relativeClassAnswers : ({id}, {classId}, context) => {
        return context.prisma.field({id}).answers({
            where : {
                author : {
                    class : {
                        id : classId
                    }
                }
            }
        });
    }
}

module.exports = {
    Field,
}
