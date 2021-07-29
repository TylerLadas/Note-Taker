// Dependencies
// =============================================================
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsinng
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// access to router folders
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// public folder middleware for access to public folder CSS and JS
app.use(express.static('public'));

// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });