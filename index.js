const booklist = [{
    title: "",
    author : "",
}]


let books = new Object();
books.title = "to kill a mocking bird";
books.author = "Philip Lahm";

console.log(books);

const addBtn = document.getElementById("add");

const body = document.querySelector(".container");
const bkName = document.getElementById("name");
const bkAuthor = document.getElementById("author");




function addBook (){
    let bkdiv = document.createElement("div");
    let addTitle = document.createElement("h2");
    let addAuthor = document.createElement("p");
    let rmBtn = document.createElement("button");
    let hr = document.createElement("hr");

    body.appendChild(bkdiv);
    bkdiv.appendChild(addTitle);
    bkdiv.appendChild(addAuthor);
    bkdiv.appendChild(hr);



    books.title =  bkname.value;
    books.author =  bkAuthor.value;

    addTitle.innerHTML = books.title
    
    

}
addBtn.addEventListener("click", addBook);