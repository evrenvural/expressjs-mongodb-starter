import mongoose, { Schema } from 'mongoose';
import { BaseModel, EmailRegex, UserTypeEnum } from '../helper/constants';
import { validateEmail } from '../helper/functions';

const UserModel = Schema({
  email: {
    type: String,
    max: 50,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Error, email is required field',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [EmailRegex, 'Please fill a valid email address']
  },
  userName: {
    type: String,
    min: 3,
    max: 15,
    trim: true,
    unique: true,
    required: 'Error, userName is required field'
  },
  password: {
    type: String,
    min: 5,
    max: 15,
    trim: true,
    required: 'Error, password is required field'
  },
  userType: {
    type: String,
    enum: Object.values(UserTypeEnum),
    default: UserTypeEnum.User
  },
  titleEntries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TitleEntry'
    }
  ],
  ...BaseModel
});

export default mongoose.model('User', UserModel);
