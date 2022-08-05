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

//   function for deleting notes
function deleteNotes(notesArray) {
    const result = notesArray.findByIndex(note => note.id === id)[0];
    notesArray.splice(result, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
      );
};

module.exports = {
    findById,
    createNewNotes,
    deleteNotes
}

