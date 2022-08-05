const router = require('express').Router();
const {
    findById,
    createNewNotes,
    validateNotes
} = require('../../lib/notes')
const { unikId } = require('unik-id');
const { notes } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    // let results = notes;
    // if (req.query) {
    //   results = getNote(req.query, results);
    // }
    res.json(notes);
    console.log(notes);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    // set id based on what the next index of the array will be.
    req.body.id = unikId();
    
    // // if any data in req.body is incorrect, send 400 error back
    // if(!validateNotes) {
    //     res.status(400).send('The note is not properly formatted.');
    // } else {
    const results = createNewNotes(req.body, notes);
    res.json(results);
});

module.exports = router;