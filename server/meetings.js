const express = require('express');
const meetingsRouter = express.Router();
const db = require("./db");

// Meetings Routes
meetingsRouter.get('/api/meetings', function(req, res) {
    const meetings = db.getAllFromDatabase('meetings');
    res.send(meetings);
});

meetingsRouter.post('/api/meetings', function(req, res) {
  // createMeeting db.addToDatabase('meetings');
});

meetingsRouter.delete('/api/meetings/', function(req, res) {
  // db.deleteAllFromDatabase('meetings');
});

module.exports = meetingsRouter;
