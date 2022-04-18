const express = require("express");

const userRoutes = express.Router();

const db = require("../db");

// get one user
userRoutes.route("/users/:id").get(async function (req, res) {
  const dbClient = db.getDb();

  try {
    const user = await dbClient
      .collection("users")
      .findOne({ _id: req.params.id });

    if (!user) {
      res.status(404).json({
        status: 404,
        message: "No user found",
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
    data: user,
  });
});

module.exports = userRoutes;
