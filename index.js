
const addBtn = document.getElementById("add");
const body = document.querySelector(".container");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookList = [];

function displayBook (title, author){
    let bookContainer = document.querySelector('.col-1');

    let bkdiv = document.createElement("div");
    // Title of the book
    let addTitle = document.createElement("h2");
    addTitle.textContent = title;
    bkdiv.appendChild(addTitle);

    //Author of the book
    let addAuthor = document.createElement("p");
    addAuthor.textContent = author;
    bkdiv.appendChild(addAuthor);

    //Remove Button
    let rmBtn = document.createElement("button");
    rmBtn.textContent = "Remove";
    rmBtn.classList.add('rmbtn');

    // const rembut = document.querySelectorAll('.rmbtn');
    // for (let i = 0; i < rembut.length; i++) {
    //     rembut[i]
    // }
    // //rmBtn.id = 


    bkdiv.appendChild(rmBtn);

    let hr = document.createElement("hr");
    bkdiv.appendChild(hr);

    bookContainer.appendChild(bkdiv);

      // let books = new Object;
    // // books.title =  bkname.value;
    // books.author =  bkAuthor.value;
    

    //addTitle.innerHTML = bookName.value;
    //addAuthor.innerHTML = bookAuthor.value;
};

function addBook(title, author) {
    const bookId = Math.random();
    const book = {title, author, id: bookId};
    bookList.push(book);
    console.log(bookList);
}

function saveBook() {
    localStorage.setItem('bookList', JSON.stringify(bookList));
}

addBtn.addEventListener("click", () => {
    addBook(bookName.value, bookAuthor.value);
    saveBook();
    displayBook(bookName.value, bookAuthor.value);   
});