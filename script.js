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

submitBtn.addEventListener("click", () => {
    addModal.classList.add('hidden');
    libraryView.classList.remove('blur');
});