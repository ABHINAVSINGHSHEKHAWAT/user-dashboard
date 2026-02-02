const express = require("express");
const router = express.Router();
const User = require("../models/user");

// HOME – SHOW USERS
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users });
});

// SHOW ADD USER PAGE
router.get("/add", (req, res) => {
  res.render("addUser");
});

// ADD USER
router.post("/add", async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
});

// DELETE USER
router.get("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
