const express = require("express");

const postsRoutes = express.Router();

const db = require("../db");

// we get posts here
postsRoutes.route("/posts").get(async function (_req, res) {
  const dbClient = db.getDb();

  try {
    const posts = await dbClient
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

// get one specific post
postsRoutes.route("/posts/:id").get(async function (req, res) {
  const dbClient = db.getDb();

  try {
    const post = await dbClient
      .collection("posts")
      .findOne({ _id: req.params.id });

    if (!post) {
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
    data: post,
  });
});

// ask to join this post
postsRoutes.route("/posts/:id/join").post(async function (req, res) {
  const dbClient = db.getDb();

  try {
    const post = await dbClient
      .collection("posts")
      .findOne({ _id: req.params.id });

    if (!post) {
      res.status(404).json({
        status: 404,
        message: "No post found",
      });
      return;
    }

    // Do join logic here
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
  const dbClient = db.getDb();

  const createPayload = {
    title: req.body.title,
    description: req.body.description,
  };

  try {
    const createdPost = await dbClient
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

// edit a post
postsRoutes.route("/posts/:id").put(async function (req, res) {
  const dbClient = db.getDb();

  const editPayload = {
    title: req.body.title,
    description: req.body.description,
  };

  try {
    const editedPost = await dbClient
      .collection("posts")
      .updateById(req.params.id, editPayload);

    if (!editedPost) {
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
    data: editedPost,
  });
});

module.exports = postsRoutes;
