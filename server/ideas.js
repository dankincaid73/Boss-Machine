const express = require('express');
const ideasRouter = express.Router();
const db = require("./db");

// Ideas Routes
ideasRouter.get('/api/ideas', function(req, res) {
    const ideas = db.getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.get('/api/ideas/:id', function(req, res) {
    // const idea = db.getFromDatabaseById('ideas');
    // res.send(ideas);
});

ideasRouter.post('/api/ideas', function(req, res) {
  // add ideas to db db.addToDatabase('ideas');
});

ideasRouter.put('/api/ideas', function(req, res) {
  // update idea in db db.updateInstanceInDatabase('ideas');
});

ideasRouter.delete('/api/ideas/:id', function(req, res) {
  // delete idea in db db.deleteFromDatabasebyId('ideas');
});

module.exports = ideasRouter;
