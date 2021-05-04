import { Router } from 'express';
import User from '../model/user';

// Initial
const router = Router();

// Functions
async function getUserList(req, res) {
  const userList = await User.find();
  res.status(200).send(userList);
}

async function getUserById(req, res) {
  const { userId } = req.params;

  const user = await User.findById(userId);
  res.status(200).send(user);
}

function createUser(req, res) {
  const user = new User(req.body);
  user.save();
  res.status(201);
}

// Routes
router.get('', getUserList);
router.get('/:userId', getUserById);
router.post('', createUser);

export default router;
