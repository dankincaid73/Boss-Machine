const ideasRouter = require('express').Router();

// Import DB methods
const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

// Import checkMillionDollarIdea
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// Middleware to check if id exists
ideasRouter.param('id', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});

// GET all ideas
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

// POST idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

// GET idea by id
ideasRouter.get('/:id', (req, res, next) => {
  res.send(req.idea);
});

// UPDATE idea
ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
  let updatedInstance = updateInstanceInDatabase('ideas', req.body);
  res.send(updatedInstance);
});

// DELETE idea
ideasRouter.delete('/:id', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('ideas', req.params.id);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});

// Export ideasRouter
module.exports = ideasRouter;
