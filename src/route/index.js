import { Router } from 'express';

import User from './user';

const router = Router();

// Routes
router.use('/user', User);

export default router;
