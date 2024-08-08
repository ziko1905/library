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
    
    for (n in book) {
      const cell = document.createElement("td");
      if (n == "read") {
        const readBtn = document.createElement("button")
        readBtn.setAttribute("class", "table-btn")
        readBtn.id = book[n] ? "read" : "not-read";
        readBtn.textContent = book[n] ? "Read" : "Not read";

        readBtn.addEventListener("click", () => {
          readBtn.textContent = readBtn.id == "read" ? "Not read" : "Read";
          readBtn.id = readBtn.id == "read" ? "not-read" : "read"
        })

        cell.appendChild(readBtn)
      }
      else cell.textContent = `${book[n]}`
      row.appendChild(cell)
    }

    book.row = row;

    const btnCell = document.createElement("td");
    const rmBtn = document.createElement("button");

    rmBtn.textContent = "Remove";
    rmBtn.setAttribute("class", "table-btn");
    
    btnCell.appendChild(rmBtn);
    row.appendChild(btnCell);

    rmBtn.addEventListener("click", () => {
      book.row.remove()
      delete book
    })

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
  if (getComputedStyle(formDiv).zIndex == "2") formDiv.style.zIndex = "0";
  else formDiv.style.zIndex = "2";
  }
)

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (e.target.reportValidity()) {
    const formData = new FormData(e.target)
    const newBook = new Book(formData.get("booktitle"), formData.get("bookauthor"), formData.get("bookpages"), formData.get("read"))
    addBookToLibrary(newBook)
    e.target.reset()
  }
})