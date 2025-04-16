const express = require('express');
const { getPeople, addPerson, getPersonById, updatePerson, deletePerson  } = require('../controllers/people'); // Import controller functions
const router = express.Router();

router.get('/', getPeople);
router.post('/', addPerson);

router.get('/:id', getPersonById);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;