const express = require("express");

const loginRoutes = express.Router();

const db = require("../db");

loginRoutes.route("/login").post(async function (req, res) {
  const dbClient = db.getDb();
  const { username, password } = req.body;

  try {
    const user = await dbClient
      .collection("users")
      .findOne({ username, password });

    if (!user) {
      res.status(401).json({
        status: 401,
        message: "Bad username or password, try again!",
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
      username: user.username,
    },
  });
});
