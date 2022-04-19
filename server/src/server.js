"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./db");

const app = express()
  .use(morgan("tiny"))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  .use(require("./routes/users"))
  .use(require("./routes/login"))
  .use(require("./routes/posts"))
  .use(require("./routes/photos"))

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))
  .use(function (err, _req, res) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

const PORT = process.env.PORT || 8000;
db.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
