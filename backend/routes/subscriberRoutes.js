const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

router.post("/", async (req, res) => {
  const subscriber = new Subscriber(req.body);
  await subscriber.save();
  res.json({ message: "Subscribed" });
});

router.get("/", async (req, res) => {
  const subscribers = await Subscriber.find();
  res.json(subscribers);
});

module.exports = router;
