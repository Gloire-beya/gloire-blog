import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createComment, editComment, getPostComments, likeComment } from "../controllers/comment.controller.js"

const router = express.Router()

router.post('/create', verifyToken, createComment)
router.get('/get-post-comments/:postId', getPostComments);
router.put('/like-comment/:commentId', verifyToken, likeComment)
router.put('/edit-comment/:commentId', verifyToken, editComment);

export default router