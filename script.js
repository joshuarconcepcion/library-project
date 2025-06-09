const myLibrary = [];

function Book(title, author, pages, status) {
    if (!(this instanceof Book)) {
        throw new Error("Use new operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook(title, author, pages, status) {
    let book = new Book(title, author, pages, status);

    myLibrary.push(book);
}