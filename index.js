
const addBtn = document.getElementById("add");
const body = document.querySelector(".container");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");




function addBook (){
    let bkdiv = document.createElement("div");
    let addTitle = document.createElement("h2");
    let addAuthor = document.createElement("p");
    let rmBtn = document.createElement("button");
    let hr = document.createElement("hr");


    rmBtn.innerHTML = "Remove";

    body.appendChild(bkdiv);
    bkdiv.appendChild(addTitle);
    bkdiv.appendChild(addAuthor);
    bkdiv.appendChild(rmBtn);
    bkdiv.appendChild(hr);

//     let book = {title: 'bookName.value', author: 'bookAuthor.value'};
// bookList.push(book);


    
    // let books = new Object;
    // // books.title =  bkname.value;
    // books.author =  bkAuthor.value;
    

    addTitle.innerHTML = bookName.value;
    addAuthor.innerHTML = bookAuthor.value;

    
    

};

addBtn.addEventListener("click", addBook);