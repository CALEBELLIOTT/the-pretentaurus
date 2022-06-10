import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";



class CommentsService {
    async getAll(query = {}) {
        return await dbContext.Comments.find(query)
    }
    async getById(id) {
        const foundComment = await dbContext.Comments.findById(id)
        if (!foundComment){
            throw new BadRequest ("No comments with that Id")
        }
        return foundComment
    }
    async create(body) {
        return await dbContext.Comments.create(body)
    }
    async remove(commentId, userId) {
        const comment = await this.getById(commentId)
        if (comment.creatorId.toString() !== userId){
            throw new Forbidden ("you did not create this comment")
        }
        await comment.remove()
        return `deleted your comment`
    }
}

export const commentsService = new CommentsService()