const express = require("express");

const loginRoutes = express.Router();

const db = require("../db");

loginRoutes.route("/signup").post(async function (req, res) {
  const dbClient = db.getDb();

  const { email, name, password } = req.body;
  if (!email || !password || !name) {
    res.status(400).json({
      status: 401,
      message: "Invalid email, name or password",
    });
    return;
  }

  const createPayload = {
    email,
    password,
    name,
  };

  let newUser;
  try {
    newUser = await dbClient.collection("users").insertOne(createPayload);
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
      email: createPayload.email,
      name: createPayload.name,
      _id: newUser.insertedId,
      isAuthenticated: true,
    },
  });
});

loginRoutes.route("/login").post(async function (req, res) {
  const dbClient = db.getDb();

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: 400,
      message: "Invalid email or password",
    });
    return;
  }

  let user;
  try {
    user = await dbClient.collection("users").findOne({ email, password });

    if (!user) {
      res.status(401).json({
        status: 401,
        message: "Bad email or password, try again!",
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
      ...user,
      isAuthenticated: true,
    },
  });
});

module.exports = loginRoutes;
