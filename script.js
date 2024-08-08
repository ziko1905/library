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
    const table = document.querySelector("tbody");
    const row = document.createElement("tr");
    console.log(book)

    for (n in book) {
      const cell = document.createElement("td");
      cell.textContent = `${book[n]}`
      row.appendChild(cell)
    }

    const cell = document.createElement("td");
    row.appendChild(cell)

    table.appendChild(row)
}

let book1 = new Book("Lorem", "John", 152, false)
let book2 = new Book("Ipusum", "Jack", 125, true)
let book3 = new Book("Dolor", "Jacob", 521, false)
let book4 = new Book("Sit", "Jerry", 251, false)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)

const btn = document.querySelector(".show");
const formDiv = document.querySelector(".form");

btn.addEventListener("click", () => {
  console.log("clicked")
  if (getComputedStyle(formDiv).zIndex == "2") formDiv.style.zIndex = "0";
  else formDiv.style.zIndex = "2";
  }
)