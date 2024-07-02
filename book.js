const books = [
    { id: '1', title: 'Book 1', author: 'Author 1' },
    { id: '2', title: 'Book 2', author: 'Author 2' },
  ];
  
  function getAll() {
    return books;
  }
  
  function getById(id) {
    return books.find(book => book.id === id);
  }
  
  function create(book) {
    const newBook = { id: (books.length + 1).toString(), ...book };
    books.push(newBook);
    return newBook;
  }
  
  function update(id, bookData) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...bookData };
      return books[index];
    }
    return null;
  }
  
  function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
  
  module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteBook,
  };
