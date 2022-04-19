const express = require("express");

const searchPhotos = require("../unsplash");
const photoRoutes = express.Router();

photoRoutes.route("/photos/search").get(async function (req, res) {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({
      status: 400,
      message: "Missing query string",
    });
    return;
  }

  let photos = [];
  try {
    photos = await searchPhotos(q);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something bad happened :(",
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: {
      photos,
    },
  });
});

module.exports = photoRoutes;
