export class Post {
    constructor(data) {
        this.title = data.title
        this.creatorId = data.creatorId
        this.originalDescription = data.originalDescription
        this.editedDescription = data.editedDescription
        this.numberOfLikes = data.numberOfLikes
        this.likedBy = data.likedBy
        this.imgUrl = data.imgUrl

    }


    get Template() {
        return `
        <div class="col-4">
<div class="post-card rounded p-2">
  <div class="d-flex justify-content-between ">
    <h3>Creator name</h3>
    <button class="btn btn-danger ">Delete</button>
  </div>
  <img class="img-fluid p-4"
    src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    alt="">
  <h4 class="">title</h4>
  <p class="text-center">description</p>
</div>
</div>
`

    }
}