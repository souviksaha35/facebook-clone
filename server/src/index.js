const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const prisma = new PrismaClient()


const resolvers = { 
    Query: {
        info: () => `This is the API of Hackernews Clone`,
        feed: (parent, args, context) => {
            return context.prisma.link.findMany()
        }
    },

    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))