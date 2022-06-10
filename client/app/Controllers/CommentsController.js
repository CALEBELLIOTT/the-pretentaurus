import { ProxyState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";

function _draw() {
    let comments = ProxyState.comments
    let template = ''
    comments.forEach(c => template += c.Template)
    document.getElementById('comment-body').innerHTML = template
}

export class CommentsController {
    constructor() {
        console.log('comment controllers');
        this.getComments()
        ProxyState.on('comments', _draw)
    }

    async createComment() {
        try {
            window.event.preventDefault()
            console.log('creating comment');
            let form = window.event.target
            let data = {
                description: form.description.value
            }
            await commentsService.createComment(data)
        } catch (error) {
            console.error(error);
            throw new Error('did not work')
        }
    }

    async getComments() {
        try {
            await commentsService.getComments()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteComment(id) {
        try {
            await commentsService.deleteComment(id)
        } catch (error) {
            console.error(error)
        }
        this.getComments()
    }
}