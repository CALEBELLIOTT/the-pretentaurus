import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

function _draw() {
    let posts = ProxyState.posts
    let template = ''
}


export class PostController {
    constructor() {
        console.log('post controllers');
    }

    async createPost() {
        window.event.preventDefault()
        let form = window.event.target
        let data = {
            id: "",
            imgUrl: form.url.value,
            title: form.title.value,
            originalDescription: form.description.value,
            editedDescription: form.description.value
        }
        form.reset()
        console.log(data);
        try {
            await postsService.createPost(data)
        } catch (error) {
            console.error(error);
        }
    }

}