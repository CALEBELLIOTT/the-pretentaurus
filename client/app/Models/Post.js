export class Post {
  constructor(data) {
    this.title = data.title
    this.originalDescription = data.originalDescription
    this.editedDescription = data.editedDescription
    this.numberOfLikes = data.numberOfLikes
    this.likedBy = data.likedBy
    this.imgUrl = data.imgUrl
    this.id = data.id
  }


  get Template() {
    return `
        <div class="col-md-4">
<div class="post-card rounded p-2">
  <div class="d-flex justify-content-between ">
    <h3></h3>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#post-comment-modal">
  See details
</button>
    <button class="btn btn-danger " onclick="app.postsController.deletePost('${this.id}')">Delete</button>
  </div>
  <img class="img-fluid p-4"
    src="${this.imgUrl}"
    alt="">
  <h4 class="">${this.title}</h4>
  <p class="text-center">${this.editedDescription}</p>
</div>
</div>
`

  }
}