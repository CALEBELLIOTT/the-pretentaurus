import { commentsService } from "../services/CommentsService"
import { postsService } from "../services/PostsService"
import BaseController from "../utils/BaseController"


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getAll)
            .get('/:id/comments', this.getComments)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let posts = await postsService.getAll()
            return res.send(posts)
        } catch (error) {
            next(error)
        }
    }
    async getComments(req, res, next) {
        try {
            let comments = await commentsService.getAll({ postId: req.params.id })
            return res.send(comments)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let post = await postsService.create(req.body)
            return res.send(post)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            let message = await postsService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}
