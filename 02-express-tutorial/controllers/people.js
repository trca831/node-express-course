const people = require('../data');


function addPerson (req, res) {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: 'Please provide a name' });
  } else {
    people.push({ id: people.length, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
};

function getPeople(req, res) { 
    res.json({
        message: "Displaying the people from our catalog",
        people: people,
    });
}

function getPerson(req, res) {
    let selectedPerson = people.find((p) => p.id === id);

  if (!person) {
    res.status(404).json({ success: false, message: 'Person not found' });
  } else {
    if (req.body.name) {
      person.name = req.body.name;
      res.status(200).json({ success: true, message: 'Person updated' });
    } else {
      res.status(400).json({ success: false, message: 'Please provide a name' });
    }
  }
};

function deletePerson (req, res) {
  const id = parseInt(req.params.id);
  const index = people.findIndex((p) => p.id === id);

  if (index === -1) {
    res.status(404).json({ success: false, message: 'Person not found' });
  } else {
    people.splice(index, 1);
    res.status(200).json({ success: true, message: 'Person deleted' });
  }
};