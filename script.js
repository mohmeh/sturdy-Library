const library = [];

function CreateBook (author, title, pages){ 
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

let book = new CreateBook ('Moh', 'Bug bounty Js', '541'){
addBookToLibrary:function (){
library.push(this.book)};
};

function displayLibrary (){
for (const book of library){
  console.log(library);
}
  displayLibrary();
};
function onClick(){
  return CreateBook;
};
var newBook = document.createElement('button');
newBook.innerText = "Add new Book";
newBook.addEventListener('click', onClick);
document.body.appendChild(newbook);

function deleteBook(bookId){
  delete book.bookId;
}
var remover = document.createElement('button');
remover.innerText = "Remove book";
remover.addEventListener('click', deleteBook);
document.body.appendChild(remover);

function status (){
  Createbook.prototype.thisstatus = true;
}
var readStatus = document.createElement('button');
readStatus.innerText = "Remove book";
readStatus.addEventListener('click', status);
readStatus.body.appendChild(readStatus);
