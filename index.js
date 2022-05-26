const addBtn = document.getElementById("add");
const mainCol = document.querySelector(".col-1");

class Books {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}
class UI {
  static addBooks(title, author){
    const bookRow =  document.createElement("div");
    bookRow.classList.add("flex");

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("bk-details");

    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = title;
    bookDetails.appendChild(bookTitle)

    const byP = document.createElement("p");
    byP.innerText = "By";

    bookDetails.appendChild(byP);

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = author;
    bookDetails.appendChild(bookAuthor);

    bookRow.appendChild(bookDetails);
    mainCol.appendChild(bookRow);
    

    console.log(title, author)

  }
}


addBtn.addEventListener("click", addLibrary);

function addLibrary(){
  const title = document.getElementById("name");
  const author = document.getElementById("author");

  const book = new Books(title.value, author.value);

  UI.addBooks(book);


}
