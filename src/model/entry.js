import mongoose, { Schema } from 'mongoose';
import { BaseModel } from '../helper/constants';

const EntryModel = Schema({
  content: {
    type: String,
    min: 3,
    max: 1000,
    trim: true,
    required: 'Error, content is required field'
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  unlikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Error, author is required field'
  },
  ...BaseModel
});

export default mongoose.model('Entry', EntryModel);
