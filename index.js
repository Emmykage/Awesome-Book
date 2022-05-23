const booklist = [{
    title: "",
    author : "",
}]

const addBtn = document.getElementById("add");

const body = document.querySelector(".container");

let books = new Object();
books.title = "to kill a mocking bird";
books.author = "Philip Lahm";

console.log(books);



function addBook (){
    let bkdiv = document.createElement("div");
    

}
addBtn.addEventListener("click", addBook);