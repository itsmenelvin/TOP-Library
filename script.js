const library = [];

function Book(name, page, read) {
  this.name = name;
  this.pages = page;
  this.read = read;
}

function addBook() {
  const name = document.querySelector('.name').value;
  const page = document.querySelector('.pages').value;
  const newBook = new Book(name, page);
  console.log(`${name} book added`);
  library.push(newBook);
}

// show form
const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', () => {
  document.querySelector('.form-container').classList.add('show');
  document.querySelector('.form').classList.add('show');
});
