const library = [];

function CreateBook (author, title, pages, readStatus){ 
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

let book = new CreateBook ('Moh', 'Bug bounty Js', '541'){
addBookToLibrary:function (){
library.push(this.book)};
};


let display = document.getElementById('library-container');
function displayLibrary() {
    display.innerHTML = "";
  for (const book of library) {
        const card = document.createElement('div');
    card.classList.add('card'); // Give it a class name for CSS styling
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.readStatus}</p>
    `;
    display.appendChild(card);
  }
}


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
