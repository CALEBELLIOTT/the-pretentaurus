import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { PostSchema } from '../models/Post';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Account = mongoose.model('Account', AccountSchema);

  Post = mongoose.model('Post', PostSchema)
}

export const dbContext = new DbContext()
