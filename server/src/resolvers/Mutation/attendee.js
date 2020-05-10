const attendee = {
    async createAttendee(parent, {name = "Anonymous", answers, classId}, context) {
        return await context.prisma.createAttendee({
            name,
            answers : {
                create : answers.map(item => {
                    return {
                        value : item.value,
                        field : {connect : {id : item.field.id}},
                    }
                })
            },
            class   : {connect : {id : classId}},
        })
    }
};


module.exports = {attendee};

