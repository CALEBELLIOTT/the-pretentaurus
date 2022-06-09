import { dbContext } from "../db/DbContext";



class CommentsService {
    async getAll(query = {}) {
        return await dbContext.Comments.find(query)
    }
    async create(body) {
        return await dbContext.Comments.create(body)
    }
    async remove(id) {
        let original = await dbContext.Comments.findById(id)
        await original.remove()
        return `deleted ${original.name}`
    }
}

export const commentsService = new CommentsService()