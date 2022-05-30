const addBtn = document.getElementById("add");
const mainCol = document.querySelector(".col-1");


class Books {
  constructor(title, author){
    this.Title = title;
    this.Author = author;
  }
}
class UI {
  static addBooks(book){
    const bookRow =  document.createElement("div");
    bookRow.classList.add("flex");

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("bk-details");

    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = `"${book.title}"` ;
    bookDetails.appendChild(bookTitle);

    const byP = document.createElement("p");
    byP.innerText = "By";

    bookDetails.appendChild(byP);

    const bookAuthor = document.createElement("p");
    bookDetails.appendChild(bookAuthor);
    bookAuthor.innerText = book.Author;


    bookRow.appendChild(bookDetails);
    mainCol.appendChild(bookRow);
    

    
  }
}


addBtn.addEventListener("click", addLibrary);

function addLibrary(){
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;

  const book = new Books(title, author);

  UI.addBooks(book);



}
