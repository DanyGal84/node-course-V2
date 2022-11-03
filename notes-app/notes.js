const fs = require('fs');
const chalk = require('chalk');

const success = chalk.bold.green.inverse;
const error = chalk.bold.red.inverse;

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    })
    saveNotes(notes);
    console.log(success('New note added!'));
  } else {
    console.log(error('Note title taken!'));
  }

  
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 1) {
    const newNotes = notes.filter((note) => {
      return note.title !== title
    });
    saveNotes(newNotes);
    console.log(success('Note removed!'));
  } else {
    console.log(error(`No note ${title} found!`));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};