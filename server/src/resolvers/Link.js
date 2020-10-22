function postedBy(parent, args, context) {
    return context.prisma.link.findOne({
        where: {
            id: parent.id
        }
    })
}

module.exports = {
    postedBy,
}