// -------------------- DATA --------------------
const library = [];

// -------------------- CONSTRUCTOR --------------------
function Book(title, author, pages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus; // boolean: true = read, false = not read
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function () {
  this.readStatus = !this.readStatus;
};

// -------------------- HELPERS --------------------
function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  library.push(newBook);
  displayLibrary(); // auto refresh
}

function deleteBook(bookId) {
  const index = library.findIndex(book => book.id === bookId);
  if (index !== -1) {
    library.splice(index, 1);
    displayLibrary();
  }
}

// -------------------- DOM RENDERING --------------------
const container = document.getElementById('library-container');

function displayLibrary() {
  // Clear the shelf
  container.innerHTML = '';

  for (const book of library) {
    // Card wrapper
    const card = document.createElement('div');
    card.classList.add('card');

    // Book details
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.readStatus ? 'Read ✅' : 'Not Read ❌'}</p>
    `;

    // ---- Remove button ----
    const removeBtn = document.getElementById('rmv-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.dataset.id = book.id;
    removeBtn.addEventListener('click', (e) => {
      deleteBook(e.target.dataset.id);
    });

    // ---- Toggle read button ----
    const toggleBtn = document.getElementById('r-status');
    toggleBtn.textContent = 'Toggle Read';
    toggleBtn.dataset.id = book.id;
    toggleBtn.addEventListener('click', (e) => {
      const targetBook = library.find(b => b.id === e.target.dataset.id);
      if (targetBook) {
        targetBook.toggleRead();
        displayLibrary();
      }
    });

    // Append buttons to card
    card.appendChild(removeBtn);
    card.appendChild(toggleBtn);

    // Drop card on the shelf
    container.appendChild(card);
  }
}

// -------------------- FORM LOGIC --------------------
const openFormBtn = document.getElementById('menu-btn'); // matches id in HTML
const bookForm = document.getElementById('book-form');

// Show form on "Add New Book" click
openFormBtn.addEventListener('click', () => {
  bookForm.style.display = 'block';
});

// Handle form submission
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Grab values
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pages = parseInt(document.getElementById('pages').value, 10);
  // Read status? Add a checkbox in HTML if you want, but for now default to false
  const readStatus = false; // you can expand later

  // Validate
  if (!title || !author || isNaN(pages)) {
    alert('Please fill all fields correctly.');
    return;
  }

  addBookToLibrary(title, author, pages, readStatus);

  // Reset and hide form
  bookForm.reset();
  bookForm.style.display = 'none';
});

// -------------------- OPTIONAL: Manually add some starter books --------------------
// Uncomment to see something on page load:
// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
// addBookToLibrary('1984', 'George Orwell', 328, true);
