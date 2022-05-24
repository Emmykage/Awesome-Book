// Extracted function from lesson
function storageAvailable(type) {
    let storage;
    try {
        const x = '__storage_test__';
        storage = window[type];
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException
                // everything except Firefox
                && (e.code === 22
                // Firefox
                || e.code === 1014
                // test name field too, because code might not be present
                // everything except Firefox
                || e.name === 'QuotaExceededError'
                // Firefox
                || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
                // acknowledge QuotaExceededError only if there's something already stored
                && storage
                && storage.length !== 0
        );
    }
}

const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const addBtn = document.getElementById("add");
let bookList;

function removeBook(e) {
    //Remove from localStorage
    bookList = JSON.parse(localStorage.getItem('bookList'));
    const bookId = e.target.id;
    const filteredBooks= bookList.filter(book => book.id !== bookId);    
    localStorage.setItem('bookList', JSON.stringify(filteredBooks));

    //Remove from the screen    
    e.target.parentElement.remove();
}

function displayBook(title, author, id) {
    //Book list container
    let bookContainer = document.querySelector('.col-1');

    //Book container
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
    rmBtn.id = id;
    rmBtn.addEventListener('click', removeBook);
    bkdiv.appendChild(rmBtn);

    //Parting line
    let hr = document.createElement("hr");
    bkdiv.appendChild(hr);

    bookContainer.appendChild(bkdiv);
};

function getBooks() {
    bookList = JSON.parse(localStorage.getItem('bookList')) || [];
}

function saveBooks() {
    localStorage.setItem('bookList', JSON.stringify(bookList));
}

function addBook(title, author) {
    const bookId = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 5);
    const newBook = {title, author, id: bookId};
    bookList.push(newBook);
    return bookId;   
}

if (storageAvailable('localStorage')) {
    window.addEventListener('load', () => {
        getBooks();
        if (bookList.length !== 0) {
            bookList.forEach(book => displayBook(book.title, book.author, book.id));
        }
    });
    addBtn.addEventListener("click", () => {
        getBooks();
        let bookId = addBook(bookName.value, bookAuthor.value);
        saveBooks();
        displayBook(bookName.value, bookAuthor.value, bookId);   
    });
}

