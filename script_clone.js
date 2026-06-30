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

const openFormBtn = document.getElementById('open-form-btn');
const bookForm = document.getElementById('book-form');
const display = document.getElementById('library-container');
function displayLibrary() {
    display.innerHTML = "";
  for (const book of library) {
        const card = document.createElement('div');
    card.classList.add('card'); 
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.readStatus}</p>
    `;
    display.appendChild(card);
  }
}
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTitle = document.querySelector('#title').value;
  const inputAuthor = document.querySelector('#author').value;
  const inputPages = document.querySelector('#pages').value;
  const newBookInstance = new Book(inputTitle, inputAuthor, inputPages);
  library.push(newBookInstance);
  displayLibrary();
  bookForm.reset();
  bookForm.style.display = "none";
});


function deleteBook(bookId) {
  const index = library.findIndex(book => book.id === bookId);
  if (index !== -1) {
    library.splice(index, 1);
  }
  displayLibrary();
}
const removeBtn = document.getElementById('rmv-btn');
    removeBtn.innerText = "Remove Book";
    removeBtn.dataset.id = book.id;
    removeBtn.addEventListener('click', (event) => {
      const targetId = event.target.dataset.id;
      deleteBook(targetId);
    });
    card.appendChild(removeBtn);
    display.appendChild(card);


Book.prototype.toggleRead = function() {
  this.readStatus = !this.readStatus; 
};
 const statusText = book.readStatus ? "Read ✅" : "Not Read ❌";
 const toggleBtn = document.getElementById('r-status');
    toggleBtn.innerText = "Change Status";
    toggleBtn.dataset.id = book.id; 
    toggleBtn.addEventListener('click', (event) => {
      const targetId = event.target.dataset.id;
      const targetBook = library.find(b => b.id === targetId);
      
      if (targetBook) {
        targetBook.toggleRead(); 
        displayLibrary();        
      }
    });

    card.appendChild(toggleBtn);
    display.appendChild(card);
