const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    for (let n = 0; n < myLibrary.length; n++) {
      console.log(`${n + 1} ${myLibrary[n].title} by ${myLibrary[n].author} has ${myLibrary[n].pages} pages`)
    }
  }