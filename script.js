const library = [{ name: 'The batman', page: 50, read: true }];

function Book(name, author, page, read) {
  this.name = name;
  this.author = author;
  this.pages = parseInt(page);
  this.read = read;
}

const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const formButton = document.querySelector('.add');
const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', function () {
  const showButton = document.querySelector('.show-button');

  showButton.addEventListener('click', showForm);

  formButton.addEventListener('click', function () {
    let name = document.querySelector('#book_name').value;
    let page = document.querySelector('#book_page').value;
    let author = document.querySelector('#book_author').value;
    let read = document.querySelector('#done_reading');
    // this will hide the form
    formContainer.classList.toggle('show');
    form.classList.toggle('show');
    if (name === '' || page === '' || author === '') return; //if empty it will return/hide without adding the empty value
    // create an new book object
    const newBook = new Book(name, author, page, !!read.checked); // !! convert the value into boolean
    library.push(newBook); // push the newly created object into library array
    // reset input value
    resetInput();
    //create a card
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
        <div class="book-image">
          <div class="image"></div>
        </div>
        <div class="book-name">${
          newBook.name.charAt(0).toUpperCase() + newBook.name.slice(1) //auto capitalize the first letter of the book name
        }</div>
        <div class="book-author">by: ${newBook.author}</div>
        <div class="book-pages">PAGES: ${newBook.pages}</div>
        <div class="book-read">READ: ${newBook.read ? 'Done' : 'Not yet'}</div>
        <div class="book-edit">EDIT</div>
        <div class="book-remove">REMOVE</div>
    `;
    main.appendChild(div);
  });
});

function resetInput() {
  document.querySelector('#book_name').value = '';
  document.querySelector('#book_page').value = '';
  document.querySelector('#done_reading').checked = false;
}

function showForm() {
  //this will show the form
  formContainer.classList.add('show');
  form.classList.add('show');
}
