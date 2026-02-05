import express from "express";
import Comment from "../models/Comment.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

/**
 * GET all comments (PUBLIC)
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comments" });
  }
});


/**
 * POST comment (PROTECTED)
 */
router.post("/", protect, async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Comment cannot be empty" });
  }

  try {
    const newComment = await Comment.create({
      text,
      user: req.user._id,
    });

    const populatedComment = await newComment.populate(
      "user",
      "username"
    );

    res.status(201).json(populatedComment);
  } catch (error) {
    console.error("CREATE COMMENT ERROR:", error);
    res.status(500).json({ message: "Failed to create comment" });
  }
});

export default router;
