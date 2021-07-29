// Dependencies
// =============================================================



// API Routes
// =============================================================

app.get('/api/notes', (req, res) => {
    //creates variable from db.json file
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));
    //return notes to client
    return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    //generate unique id with uuid package
    newNote.id = uuidv4();
    //create variable from db.json file
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));
    //push newNote to notes variable 
    notes.push(newNote);
    //write notes variable to db.json file
    fs.writeFileSync('./data/db.json', JSON.stringify(notes));
    //return notes to client
    return res.json(notes);
});

app.delete('/api/notes/:id', (req, res) => {
    //creates variable from file to delete
    let deleteNote = req.params.id;
    //creates variable from db.json file
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));
    //filters element by id from notes notes and creates newNotes array 
    let newNotes = notes.filter(note => note.id !== deleteNote);
    //write newNotes array to db.json file
    fs.writeFileSync('./data/db.json', JSON.stringify(newNotes));
    //return newNotes to client
    return res.json(newNotes);
});
