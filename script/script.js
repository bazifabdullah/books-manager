function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus
}

const addButton = document.getElementById("addButton");
const heroElement = document.getElementById("hero");
const formElement = document.getElementById("form");
const crossIcon = document.getElementById("cross");
const inputSubmitButton = document.getElementById("inputSubmit")
const bookCards = document.getElementById("cards")

addButton.addEventListener('click', openForm);
crossIcon.addEventListener('click', closeForm);

function openForm() {
    heroElement.style.display = "none";
    formElement.style.display = "flex";
}

function closeForm() {
    formElement.style.display = "none";
    heroElement.style.display = "flex";
}

function resetBookCards() {
    bookCards.innerHTML = "";
}

function showBookCards() {
    resetBookCards();
    myLibrary.forEach((book, index) => createCard(book, index));
}

function getInputValues() {
    const titleInput = document.querySelector('#input-title').value;
    const authorInput = document.querySelector('#input-author').value;
    const pagesInput = document.querySelector('#input-pages').value;
    const readCheck = document.querySelector('#read-Check').value;
    return new book(titleInput, authorInput, pagesInput, readCheck)
}

function addBookToLibrary() {
    const newBook = getInputValues();
    myLibrary.push(newBook);
}

const myLibrary = [];