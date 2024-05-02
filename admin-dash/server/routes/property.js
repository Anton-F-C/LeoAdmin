//This file defines the routes for the User model
import express from "express";
const router = express.Router();
import Property from '../models/properties.js';

// Gets all properties
router.get("/", async (req, res, next) => {
  try {
    const property = await Property.findAll();
    res.send(property);
  } catch (error) {
    next(error);
  }
});

//Gets only property
router.get("/:id", async (req, res, next) => {
  try {
    // It tries to find an property in the database by its primary key (ID)
    const property = await Property.findByPk(req.params.id);
    // The server responds with the found property
    res.send(property);
  } catch (error) {
    next(error);
  }
});

// + Adds a new property
router.post("/", async (req, res, next) => {
  try {
    // It creates a new property in the database with the data in the request body
    const newProperty = await Property.create(req.body);
    // The server responds with the created property
    res.send(newProperty);
  } catch (error) {
    next(error);
  }
});

// - Delete a property
router.delete("/:id", async (req, res, next) => {
  try {
    // It tries to find an property in the database by its primary key (ID)
    const property = await Property.findByPk(req.params.id);
    // If the property is found, it's deleted from the database
    await property.destroy();
    // The server responds with the deleted property
    res.send(property);
  } catch (error) {
    next(error);
  }
});

//Updates a property
router.put("/:id", async (req, res, next) => {
  try {
    // It tries to find an property in the database by its primary key (ID)
    const property = await Property.findByPk(req.params.id);
    // If the property is found, it's updated with the data in the request body
    await property.update(req.body);
    // The server responds with the updated property
    res.send(property);
  } catch (error) {
    next(error);
  }
});

export default router;