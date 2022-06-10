import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

function _draw() {
    let posts = ProxyState.posts
    template = ''


}


export class PostController {
    constructor() {
        console.log('post controllers');

    }

    async createPost() {
        window.event.preventDefault()
        let form = window.event.target
        let data = {
            url: form.url.value,
            title: form.title.value,
            description: form.description.value

        }

        console.log(data);
        await postsService.createPost()
    }

}