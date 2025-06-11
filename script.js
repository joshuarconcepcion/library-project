const myLibrary = [];

function Book(title, author, status) {
    if (!(this instanceof Book)) {
        throw new Error("Use new operator");
    }

    this.title = title;
    this.author = author;
    this.status = status;
}

function addBook(title, author, status) {
    let book = new Book(title, author, pages, status);

    myLibrary.push(book);
}

const addBtn = document.querySelector('#add-book');
const addModal = document.querySelector('.add-modal');
const libraryView = document.querySelector('.library-cards');

addBtn.addEventListener("click", () => {
    addModal.classList.remove('hidden');
    libraryView.classList.add('blur');
});

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    const bookStatus = document.querySelector('#book-status').selectedOptions[0].text;

    const newDiv = document.createElement('div');
    const container = document.querySelector('.library-cards');
    const addBook = document.querySelector('#add-book');
    newDiv.classList.add('library-card');
    newDiv.innerHTML = `
    <h1>${bookTitle}</h1>
    <h2>${bookAuthor}</h2>
    <h3>${bookStatus}</h3>
    `;

    container.insertBefore(newDiv, addBook);

    addModal.classList.add('hidden');
    libraryView.classList.remove('blur');
});