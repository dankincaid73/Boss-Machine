const express = require('express');
const minionsRouter = express.Router();
const db = require("./db");

// Minions Routes
minionsRouter.get('/api/minions', function(req, res) {
    const minions = db.getAllFromDatabase('minions');
    res.send(minions);
});

minionsRouter.get('/api/minions/:id', function(req, res) {
    // const minions = db.getFromDatabaseById('minions');
    // res.send(minions);
});

minionsRouter.post('/api/minions', function(req, res) {
  // add minion to db db.addToDatabase('minions');
});

minionsRouter.put('/api/minions', function(req, res) {
  // add minion to db db.updateInstanceInDatabase('minions');
});

minionsRouter.delete('/api/minions/:id', function(req, res) {
  // add minion to db db.deleteFromDatabasebyId('minions');
});

module.exports = minionsRouter;
