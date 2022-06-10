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
}