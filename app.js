const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const books = require('./books'); 

app.use(bodyParser.json());


app.get('/books', (req, res) => {
  res.json(books.getAll());
});

app.get('/books/:id', (req, res) => {
  const book = books.getById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});


app.post('/books', (req, res) => {
  const book = req.body;
  const newBook = books.create(book);
  res.status(201).json(newBook);
});


app.put('/books/:id', (req, res) => {
  const updatedBook = books.update(req.params.id, req.body);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});


app.delete('/books/:id', (req, res) => {
  const deleted = books.delete(req.params.id);
  if (deleted) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

