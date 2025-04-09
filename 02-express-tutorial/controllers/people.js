const { people } = require('../data'); 

const getPeople = (req, res) => {
  res.json(people); 
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      success: false,
      message: "Please provide a name"
    });
  }

  people.push({ id: people.length + 1, name: req.body.name });

  res.status(201).json({
    success: true,
    name: req.body.name
  });
};

const getPersonById = (req, res) => {
    const person = people.find(p => p.id === parseInt(req.params.id));
  
    if (!person) {
      return res.status(404).json({ success: false, message: 'Person not found' });
    }
  
    res.json(person);
  };

  const updatePerson = (req, res) => {
    const person = people.find(p => p.id === parseInt(req.params.id));
  
    if (!person) {
      return res.status(404).json({ success: false, message: 'Person not found' });
    }
  
    person.name = req.body.name || person.name;
    res.json({ success: true, name: person.name });
  };

  const deletePerson = (req, res) => {
    const personIndex = people.findIndex(p => p.id === parseInt(req.params.id));
  
    if (personIndex === -1) {
      return res.status(404).json({ success: false, message: 'Person not found' });
    }
  
    people.splice(personIndex, 1);
    res.status(204).send(); 
  };

module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson };