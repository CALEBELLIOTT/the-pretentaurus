import { dbContext } from "../db/DbContext"


class PostsService {
    async getAll() {
        const posts = await dbContext.Posts.find().sort('roomNumber')
        return posts
    }
    async create(body) {
        const post = await dbContext.Posts.create(body)
        return post
    }
    async remove(id) {
        const original = await dbContext.Posts.findById(id)
        await original.remove()
        return `deleted ${original.name}`
    }

}

export const postsService = new PostsService()