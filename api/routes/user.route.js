import express from 'express'
import { getUser, deleteUser, getUsers, signOut, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.get('/test', test)
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/sign-out', signOut);
router.get('/get-users', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router