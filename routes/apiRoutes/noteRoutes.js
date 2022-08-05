const router = require('express').Router();
const {
    findById,
    createNewNotes,
    deleteNotes
} = require('../../lib/notes')
const { unikId } = require('unik-id');
const { notes } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    // let results = notes;
    // if (req.query) {
    //   results = getNote(req.query, results);
    // }
    res.json(notes);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    // set id based on what the next index of the array will be.
    req.body.id = unikId();

    // if any data in req.body is incorrect, send 400 error back
    if(!notes) {
        res.status(400).send('The note is not properly formatted.');
    } else {
    const note = createNewNotes(req.body, notes);
    res.json(note);}
});

router.delete('/notes/:id', (req, res) => {
    var note = findById(parseInt(req.params.id));
  if (note) {
    deleteNotes(req.params.id);
    res.send("ok");
  } else {
    res.status(400).send("record not found");
  }
});

module.exports = router;