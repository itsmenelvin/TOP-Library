const library = [];
const main = document.querySelector('main');

class Book {
	static uniqueId = 0;

	constructor(name, author, page, read) {
		this.name = name;
		this.author = author;
		this.pages = Number(page);
		this.read = read ? 'Yes' : 'No';
		this.uniqueId = Book.uniqueId++;
		library.push(this);
		this.render();
	}

	render() {
		const div = document.createElement('div');
		div.setAttribute('data-key', this.uniqueId);
		div.innerHTML = `
        <div class="book-name">${this.name}</div>
        <div class="book-author">${this.author}</div>
        <div class="book-page">${this.pages}</div>
        <div class="book-read">${this.read}</div>
        <button class="edit-button">Edit</button>
        <button class="remove-button">Remove</button>
      `;
		main.append(div);
		this.listenRemove();
	}

	listenRemove() {
		const removeButton = document.querySelectorAll('.remove-button');
		removeButton.forEach(removeBtn => {
			removeBtn.addEventListener('click', e => {
				const index = Number(e.target.parentElement.getAttribute('data-key'));
				const book = library.find(b => b.uniqueId === index);
				library.splice(library.indexOf(book), 1);
				e.target.parentElement.remove();
			});
		});
	}
}

// sample book
new Book('To Kill a Mockingbird', 'Harper Lee', 274, true);
new Book('1984', 'George Orwell', 328, false);
new Book('Pride and Prejudice', 'Jane Austen', 278, true);

function addBook() {
	const [name, author, pages] = [
		...document.querySelectorAll("input:not([type='checkbox'])"),
	];
	const read = document.querySelector('[type="checkbox"]');
	new Book(name.value, author.value, pages.value, !!read.checked);
}

const form = document.querySelector('.form');
const headerButton = document.querySelector('.show-button');
const formButton = document.querySelector('.add');

headerButton.addEventListener('click', () => form.classList.add('show'));
formButton.addEventListener('click', () => {
	addBook();
	form.classList.remove('show');
});
