import { PrismaClient } from "@prisma/client"

export const allProfiles = async() => {
    const prisma = new PrismaClient()

    return await prisma.profile.findMany({select:{bio:true}})
}