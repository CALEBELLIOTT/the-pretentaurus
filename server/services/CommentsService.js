import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";



class CommentsService {

    async getAll(query = {}) {
        return await dbContext.Comments.find(query)
    }

    async getById(id) {
        const foundComment = await dbContext.Comments.findById(id)
        if (!foundComment) {
            throw new BadRequest("No comments with that Id")
        }
        return foundComment
    }

    async create(body) {
        return await dbContext.Comments.create(body)
    }

    async edit(update) {
        let original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new Forbidden("You did not create this comment")
        }
        original.originalDescription = update.originalDescription || original.originalDescription
        original.editedDescription = update.editedDescription || original.originalDescription
        original.numberOfLikes = update.numberOfLikes || original.numberOfLikes


        await original.save()

        return original
    }

    async remove(commentId, userId) {
        const comment = await this.getById(commentId)
        if (comment.creatorId.toString() !== userId) {
            throw new Forbidden("you did not create this comment")
        }
        await comment.remove()
        return `deleted your comment`
    }
}

export const commentsService = new CommentsService()