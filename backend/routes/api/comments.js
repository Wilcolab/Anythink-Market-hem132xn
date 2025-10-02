/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @route GET /api/comments
    * @group Comments - Operations about comments
    * @returns {Array.<Comment>} 200 - An array of comment objects
    * @returns {object} 500 - Error message
    */

 /**
    * POST /
    * Creates a new comment in the database.
    * 
    * @route POST /api/comments
    * @group Comments - Operations about comments
    * @param {Comment.model} req.body.body.required - The comment data
    * @returns {Comment.model} 201 - The created comment object
    * @returns {object} 400 - Error message
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});
