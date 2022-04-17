const express = require("express");

const postsRoutes = express.Router();

const db = require("../db");

// we get posts here
postsRoutes.route("/posts").get(async function (_req, res) {
  const dbConnect = db.getDb();

  try {
    const posts = await dbConnect
      .collection("posts")
      .find({})
      .limit(50)
      .toArray();

    if (!posts) {
      res.status(404).json({
        status: 404,
        message: "No post found",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something bad happened :(",
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: posts,
  });
});

// create a post here
postsRoutes.route("/posts").post(async function (req, res) {
  const dbConnect = db.getDb();

  const createPayload = {
    title: req.body.title,
    description: req.body.description,
  };

  try {
    const createdPost = await dbConnect
      .collection("posts")
      .insertOne(createPayload);
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something bad happened :(",
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: createdPost,
  });
});

module.exports = postsRoutes;
