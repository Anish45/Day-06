const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
