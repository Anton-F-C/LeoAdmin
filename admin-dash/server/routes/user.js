//This file defines the routes for the User model
import express from "express";
const router = express.Router();
const { User } = require("../models");

// Gets all Users
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//Gets only 1 User
router.get("/:id", async (req, res, next) => {
  try {
    // It tries to find a user in the database by its primary key (ID)
    const user = await User.findByPk(req.params.id);
    // The server responds with the found user
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// + Adds a new user
router.post("/", async (req, res, next) => {
  try {
    // It creates a new user in the database with the data in the request body
    const newUser = await User.create(req.body);
    // The server responds with the created user
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// - Delete a user
router.delete("/:id", async (req, res, next) => {
  try {
    // It tries to find an user in the database by its primary key (ID)
    const user = await User.findByPk(req.params.id);
    // If the user is found, it's deleted from the database
    await user.destroy();
    // The server responds with the deleted user
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//Updates a user
router.put("/:id", async (req, res, next) => {
  try {
    // It tries to find an user in the database by its primary key (ID)
    const user = await User.findByPk(req.params.id);
    // If the user is found, it's updated with the data in the request body
    await user.update(req.body);
    // The server responds with the updated user
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;