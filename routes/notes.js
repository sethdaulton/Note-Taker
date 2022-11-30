const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  // console.info(`${req.method} request received for tips`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI notes
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);
});

  // const { username, topic, note } = req.body;

  // if (req.body) {
  //   const newNote = {
  //     username,
  //     tip,
  //     topic,
  //     tip_id: uuid(),
  //   };

  //   readAndAppend(newNote, './db/notes.json');
  //   res.json(`Tip added successfully 🚀`);
  // } else {
  //   res.error('Error in adding tip');
  // }


module.exports = notes;
