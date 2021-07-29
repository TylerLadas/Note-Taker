// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsinng
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public folder middleware for access to public folder CSS and JS
app.use(express.static('public'));

// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });