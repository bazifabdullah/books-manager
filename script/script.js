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

function createCard(book, index) {
    const card = document.createElement('div');
    const text = document.createElement('p');
    const btnDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const readStatusBtn = document.createElement('button');

    card.classList.add('single-card');
    card.dataset.index = index;
    text.classList.add('bookInfo');
    btnDiv.classList.add('btnDiv');
    deleteBtn.classList.add('delBtn');
    readStatusBtn.classList.add('readBtn');
    
    text.textContent = `${book.title} by ${book.author}, Pages: ${book.pages}, ${book.readStatus}`;

    bookCards.appendChild(card);
    card.appendChild(text);
    card.appendChild(btnDiv);
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(readStatusBtn);
}

function getInputValues() {
    const titleInput = document.querySelector('#input-title').value;
    const authorInput = document.querySelector('#input-author').value;
    const pagesInput = document.querySelector('#input-pages').value;
    const readCheck = document.querySelector('#read-Check').value;
    let bookReadStatus;
    if (readCheck === true) {
        bookReadStatus = 'Already Read'
    } else {
        bookReadStatus = 'Not Read Yet'
    }

    return new book(titleInput, authorInput, pagesInput, bookReadStatus)
}

function addBookToLibrary() {
    const newBook = getInputValues();
    myLibrary.push(newBook);
}

const myLibrary = [];

inputSubmitButton.addEventListener('click', (event) => {

    formElement.style.display = "none";
    heroElement.style.display = "none";
    event.preventDefault();
    addBookToLibrary();
    showBookCards();
    formElement.reset();
});
      