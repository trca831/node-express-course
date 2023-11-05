const express = require('express');
const router = express.Router();

const { 
    getPeople, 
    addPerson, 
    getPersonById, 
    updatePerson, 
    deletePerson 
} = require("../controllers/people");

const { people } = require("../data.js");

// Get all people
router.get("/", (req, res) => {
    getPeople(req, res);
});

// Create a new person
router.post("/", (req, res) => {
    addPerson(req, res);
});

// Get a specific person by ID
router.get("/", (req, res) => {
    getPerson(req, res);
});

// Update a person by ID
router.put("/:id", (req, res) => {
    updatePerson(req, res);
});

// Delete a person by ID
router.delete("/:id", (req, res) => {
    deletePerson(req, res);
});

module.exports = router;