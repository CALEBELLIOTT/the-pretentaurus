
// 
// let api = axios.create({
//   baseURL: 'http://localhost:3000/api/posts',
//   withCredentials: true
// })

import { api } from "./AxiosService.js";

class PostsService {
  async createPost(data) {
    const res = await api.post('api/posts', data)
    console.log(res.data);
  }


}


export const postsService = new PostsService()