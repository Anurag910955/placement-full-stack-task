const express = require("express");
const Client = require("../models/Client");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const client = new Client({
    name: req.body.name,
    designation: req.body.designation,
    description: req.body.description,
    image: req.file ? req.file.path : "",
  });
  await client.save();
  res.json(client);
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;
