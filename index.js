// /* eslint-disable max-classes-per-file */

// // Extracted function from lesson
// function storageAvailable(type) {
//   let storage;
//   try {
//     const x = '__storage_test__';
//     storage = window[type];
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException
//                 // everything except Firefox
//                 && (e.code === 22
//                 // Firefox
//                 || e.code === 1014
//                 // test name field too, because code might not be present
//                 // everything except Firefox
//                 || e.name === 'QuotaExceededError'
//                 // Firefox
//                 || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
//                 // acknowledge QuotaExceededError only if there's something already stored
//                 && storage
//                 && storage.length !== 0
//     );
//   }
// }

// const bookName = document.getElementById('name');
// const bookAuthor = document.getElementById('author');
// const addBtn = document.getElementById('add');
// let books;

// class Book {
//   constructor(title = null, author = null, id = null) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }
// }

// class BookManager {
//   constructor() {
//     this.bookList = null;
//   }

//   getBooks() {
//     this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
//     return this.bookList;
//   }

//   saveBooks() {
//     localStorage.setItem('bookList', JSON.stringify(this.bookList));
//   }

//   addBook(title, author) {
//     const bookId = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 5);
//     const newBook = new Book(title, author, bookId);
//     this.bookList.push(newBook);
//     return bookId;
//   }

//   removeBook(e) {
//     // Remove from localStorage
//     this.bookList = JSON.parse(localStorage.getItem('bookList'));
//     const bookId = e.target.id;
//     const filteredBooks = this.bookList.filter((book) => book.id !== bookId);
//     localStorage.setItem('bookList', JSON.stringify(filteredBooks));

//     // Remove from the Interface (DOM)
//     e.target.parentElement.parentElement.remove();
//   }
// }

// const library = new BookManager();

// function displayBook(title, author, id) {
//   // Book list container
//   const bookContainer = document.querySelector('.col-1');

//   // Book container
//   const bkdiv = document.createElement('div');
//   bkdiv.classList.add('flex');

//   // book-details container
//   const bkdetails = document.createElement('div');
//   bkdetails.classList.add('bk-details');
//   bkdiv.appendChild(bkdetails);

//   // Title of the book
//   const addTitle = document.createElement('h2');
//   addTitle.textContent = `"${title}"`;
//   bkdetails.appendChild(addTitle);

//   // paragraph insertion

//   const paragraph = document.createElement('p');
//   bkdetails.appendChild(paragraph);
//   paragraph.innerText = 'by';

//   // Author of the book
//   const addAuthor = document.createElement('p');
//   addAuthor.innerHTML = author;
//   bkdetails.appendChild(addAuthor);

//   // btn-details container
//   const btnDiv = document.createElement('div');
//   btnDiv.classList.add('btn-details');
//   bkdiv.appendChild(btnDiv);

//   // Remove Button
//   const rmBtn = document.createElement('button');
//   rmBtn.textContent = 'Remove';
//   rmBtn.classList.add('rmbtn');
//   rmBtn.id = id;
//   rmBtn.addEventListener('click', library.removeBook);
//   btnDiv.appendChild(rmBtn);

//   // Parting line
//   // const hr = document.createElement('hr');
//   // bkdiv.appendChild(hr);

//   bookContainer.appendChild(bkdiv);
// }

// function resetInput() {
//   bookName.value = '';
//   bookAuthor.value = '';
// }

// if (storageAvailable('localStorage')) {
//   window.addEventListener('load', () => {
//     books = library.getBooks();
//     if (books.length !== 0) {
//       books.forEach((book) => displayBook(book.title, book.author, book.id));
//     }
//   });
//   addBtn.addEventListener('click', () => {
//     library.getBooks();
//     const bookId = library.addBook(bookName.value, bookAuthor.value);
//     library.saveBooks();
//     displayBook(bookName.value, bookAuthor.value, bookId);
//     resetInput();
//   });
// }


class Books{
  constructor(title, author){
    this.title = title;
    this.author = author
  }
}
const bookLibrary = [];

class Interface{
  static display(){
    bookLibrary.forEach(book => Interface.addBook(book))

  }

  static addBook(book){


    // Book list container
      const bookContainer = document.querySelector('.col-1');
    
      // Book container
      const bkdiv = document.createElement('div');
      bkdiv.classList.add('flex');
    
      // book-details container
      const bkdetails = document.createElement('div');
      bkdetails.classList.add('bk-details');
      bkdiv.appendChild(bkdetails);
    
      // Title of the book
      const addTitle = document.createElement('h2');
      addTitle.textContent = `"${title}"`;
      bkdetails.appendChild(addTitle);
    
      // paragraph insertion
    
      const paragraph = document.createElement('p');
      bkdetails.appendChild(paragraph);
      paragraph.innerText = 'by';
    
      // Author of the book
      const addAuthor = document.createElement('p');
      addAuthor.innerHTML = author;
      bkdetails.appendChild(addAuthor);
    
      // btn-details container
      const btnDiv = document.createElement('div');
      btnDiv.classList.add('btn-details');
      bkdiv.appendChild(btnDiv);
    
      // Remove Button
      const rmBtn = document.createElement('button');
      rmBtn.textContent = 'Remove';
      rmBtn.classList.add('rmbtn');
      // rmBtn.id = id;
      // rmBtn.addEventListener('click', library.removeBook);
      btnDiv.appendChild(rmBtn);

      bookContainer.appendChild(bkdiv);

  }

}
Interface.display()

addBtn = document.getElementById("add");
addBtn.addEventListener("click", function(){

  const title = document.getElementById("name").value;
  const author = document.getElementById("title").value;

  // Interface.display()


})

