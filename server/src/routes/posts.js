const express = require("express");
const { ObjectId } = require("mongodb");

const postsRoutes = express.Router();

const db = require("../db");

// we get posts here
postsRoutes.route("/posts").get(async function (_req, res) {
  const dbClient = db.getDb();

  let posts = [];
  try {
    posts = await dbClient.collection("posts").find({}).limit(50).toArray();

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

  let post;
  try {
    post = await dbClient
      .collection("posts")
      .findOne({ _id: ObjectId(req.params.id) });

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

  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({
      status: 400,
      message: "Missing user id",
    });
    return;
  }

  let post;
  try {
    post = await dbClient.collection("posts").update(
      { _id: ObjectId(req.params.id) },
      {
        $push: {
          candidates: req.body.userId,
        },
      }
    );

    if (!post.matchedCount) {
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
    data: {
      udpated: post.modifiedCount > 0,
    },
  });
});

// create a post here
postsRoutes.route("/posts").post(async function (req, res) {
  const dbClient = db.getDb();
  const { title, description, price, date, imgSrc } = req.body;
  if (!title || !description || !price) {
    res.status(400).json({
      status: 400,
      message: "Missing an important parameter",
    });
    return;
  }

  const createPayload = {
    title,
    description,
    price,
    date,
    imgSrc,
  };

  let newPostId;
  try {
    ({ insertedId: newPostId } = await dbClient
      .collection("posts")
      .insertOne(createPayload));
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something bad happened :(",
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: { _id: newPostId },
  });
});

// edit a post
postsRoutes.route("/posts/:id").put(async function (req, res) {
  const dbClient = db.getDb();
  const editPayload = {
    title: req.body.title,
    description: req.body.description,
  };

  let editedPost;
  try {
    editedPost = await dbClient
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
