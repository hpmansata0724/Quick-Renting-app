const src=require('..src/');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React.js app folder
app.use(express.static(path.join(__dirname, '..', 'src')));

// Serve index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
