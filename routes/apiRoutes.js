const router = require('express').Router();
const fs = require('fs');
const { unikId } = require('unik-id');
const { notes } = require('../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be.
    req.body.id = unikId();

    // if any data in req.body is incorrect, send 400 error back
    if(!notes) {
        res.status(400).send('The note is not properly formatted.');
    } else {
    const note = saveNote(req.body, notes);
    res.json(note);}
});

router.delete('/api/notes/:id', (req, res) => {
    const result = deleteNote();
    result.findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});