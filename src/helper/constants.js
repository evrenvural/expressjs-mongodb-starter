export const BaseModel = {
  createdBy: {
    type: String,
    required: 'Error, createdBy is required field'
  },
  createdTime: {
    type: Number,
    required: 'Error, createdTime is required field'
  },
  updatedTime: {
    type: Number
  },
  updatedBy: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
};

export const UserTypeEnum = {
  Admin: 'Admin',
  Editor: 'Editor',
  User: 'User'
};

export const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
