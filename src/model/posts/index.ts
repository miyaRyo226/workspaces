import { PrismaClient } from "@prisma/client"

export const allPosts = async() => {
    const prisma = new PrismaClient()
    return await prisma.post.findMany({select:{title:true}})
}