// Dependencies
// =============================================================
const path = require('path');
const router = require('express').Router();

// HTML Routes
// =============================================================

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});