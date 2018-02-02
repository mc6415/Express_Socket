const Note = require('../Models/Note');

module.exports.addNote = () => {
    const note = new Note();
    note.title = 'Hello World';
    note.createdOn = new Date();
    note.author = 'Michael Coombes';
    note.content = 'This is a note!!!!';
    note.addedField = 'asdasdsadasdas';

    note.save();
};
