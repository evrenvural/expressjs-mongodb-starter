import mongoose, { Schema } from 'mongoose';
import { BaseModel } from '../helper/constants';

const TitleEntryModel = Schema({
  title: {
    type: String,
    min: 3,
    max: 20,
    trim: true,
    required: 'Error, title is required field'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Error, author is required field'
  },
  entries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Entry',
      required: 'Error, entries is required field'
    }
  ],
  ...BaseModel
});

export default mongoose.model('TitleEntry', TitleEntryModel);
