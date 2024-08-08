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

let book1 = new Book("Lorem", "John", 152, false)
let book2 = new Book("Ipusum", "Jack", 125, true)
let book3 = new Book("Dolor", "Jacob", 521, false)
let book4 = new Book("Sit", "Jerry", 251, false)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)