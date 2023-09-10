import { PrismaClient } from "@prisma/client"
import { allProfiles } from "."

describe("posts",() => {
    let prisma:PrismaClient
    beforeEach(async() => {
            prisma = new PrismaClient()
            await prisma.user.create({data:{email:"test@example.com"}})
            await prisma.user.create({data:{email:"test2@example.com"}})
    })

    describe("allPosts",() => {
        it("返り値は配列",async() => {
            await prisma.profile.create({data:{bio:"aaa",userId:1}})
            await prisma.profile.create({data:{bio:"bbb",userId:2}})
            const result = await allProfiles()
            expect(Array.isArray(result)).toBe(true)
            expect(result).toHaveLength(2)
        })
        it("配列に中身はtitleのみ含まれる",async() => {
            await prisma.profile.create({data:{bio:"aaa",userId:1}})
            await prisma.profile.create({data:{bio:"bbb",userId:2}})
            const result = await allProfiles()
            expect(Array.isArray(result)).toBe(true)
            expect(result).toHaveLength(2)
        })
    })
})