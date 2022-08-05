const fs = require('fs');
const path = require('path');

// function foe finding note by id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  };
  
//   function for creating a new note
  function createNewNotes(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify({ notes: notesArray}, null, 2)
    );
    // return the finished code to post route for response
    return note;
  };

  // validation function to take new animal data from 
  // req.body and check if it exist and the right type.
  function validateNotes(note) {
    if(!note.notes || typeof note.notes !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    findById,
    createNewNotes,
    validateNotes
}

