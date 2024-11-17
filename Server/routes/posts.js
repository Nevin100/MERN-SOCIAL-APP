import express from "express";
import { getFeedposts, getUserPosts, likePost } from "../Controllers/posts.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/*READ*/
router.get("/", verifyToken, getFeedposts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/*UPDATE*/
router.patch("/:id/like", verifyToken, likePost);

export default router;
