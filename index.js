// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

