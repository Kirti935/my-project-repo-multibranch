// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

// Route to display all to-dos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route to add a new to-do
app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) {
    todos.push(newTodo);
    res.status(201).json({ message: 'To-do added successfully', todo: newTodo });
  } else {
    res.status(400).json({ message: 'Todo content is required' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

