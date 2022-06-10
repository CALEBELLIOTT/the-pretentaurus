import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
    originalDescription: { type: String, required: true },
    editedDescription: { type: String, required: true },
    numberOfLikes: { type: Number, min: 0, default: 0 },
    likedBy: { type: String },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account' },
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })


CommentSchema.virtual('post', {
    localField: 'postId',
    ref: 'Post',
    foreignField: '_id',
    justOne: true
})