
class Book {
  // the constructor...
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

class ManageLibrary {
  static addBookToLibrary(book) {
    const table = document.querySelector("tbody");
    const row = document.createElement("tr");
    
    for (let n in book) {
      const cell = document.createElement("td");
      if (n == "read") {
        const readBtn = document.createElement("button")
        readBtn.setAttribute("class", "table-btn")
        readBtn.id = book[n] == "true" ? "read" : "not-read";
        readBtn.textContent = book[n] == "true" ? "Read" : "Not read";

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
      delete this.book
    })

    table.appendChild(row)
  }

  static functionalizeFormPopUp() {
    const btn = document.querySelector(".show");
    const formDiv = document.querySelector(".form");
    
    btn.addEventListener("click", () => {
      if (getComputedStyle(formDiv).zIndex == "2") formDiv.style.zIndex = "0";
      else formDiv.style.zIndex = "2";
      }
    )
  }

  static functionalizeFormSubmit() {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (e.target.reportValidity()) {
        const formData = new FormData(e.target)
        const newBook = new Book(formData.get("booktitle"), formData.get("bookauthor"), formData.get("bookpages"), formData.get("read"))
        this.addBookToLibrary(newBook)
        e.target.reset()
      }
    })
  }
}

ManageLibrary.functionalizeFormPopUp()
ManageLibrary.functionalizeFormSubmit()

// Custom form validation section
