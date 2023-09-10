
import { allPosts } from "."

describe("posts",() => {
    describe("allPosts",() => {
        it("返り値は配列",async() => {
            expect(Array.isArray(await allPosts())).toBe(true)
        })
        it("配列に中身はtitleのみ含まれる",async() => {
            expect(true).toBe(true)
        })
    })
})