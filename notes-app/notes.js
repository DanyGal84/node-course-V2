const fs = require('fs');
const chalk = require('chalk');

const success = chalk.bold.green.inverse;
const error = chalk.bold.red.inverse;
const blue = chalk.bold.blue.inverse;

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 1) {
    const newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);
    console.log(success('Note removed!'));
  } else {
    console.log(error(`No note ${title} found!`));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(blue('Your notes'));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const searchNote = notes.find((note) => note.title === title);
  
  if (searchNote) {
    console.log(blue(`Title: ${searchNote.title}`));
    console.log(searchNote.body);
  } else {
    console.log(error('Unable to find note!'));
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};