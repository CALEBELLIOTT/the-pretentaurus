export class Comment {
    constructor(data) {
        this.creatorId = data.creatorId
        this.originalDescription = data.originalDescription
        this.editedDescription = data.editedDescription
        this.numberOfLikes = data.numberOfLikes
        this.likedBy = data.likedBy
        this.postId = data.postId
    }
}