import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"
import { logger } from "../utils/Logger"


class PostsService {
    async getAll() {
        const posts = await dbContext.Posts.find().sort('roomNumber')
        return posts
    }
    async create(body) {
        const post = await dbContext.Posts.create(body)
        return post
    }

    async edit(update) {
        let original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new Forbidden("You cannot edit this post")
        }
    }

    async getById(id) {
        const foundPost = await dbContext.Posts.findById(id)
        if (!foundPost) {
            throw new BadRequest('No Post found with that Id')
        }
        return foundPost
    }
    async remove(postId, userId) {
        const post = await this.getById(postId)
        if (post.creatorId.toString() !== userId) {
            throw new Forbidden('You did not create this Post')
        }
        await post.remove()
        return `deleted ${post.title}`
    }

}

export const postsService = new PostsService()