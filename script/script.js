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
const inputSubmitButton = document.getElementById("inputSubmit");
const bookCards = document.getElementById("cards");


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

function deleteBookCard() {
    let cardContainer = this.parentElement.parentElement;
    let index = cardContainer.getAttribute('data-index');
    myLibrary.splice(index, 1);
    showBookCards();
}

function toggleReadButton() {
    let cardContainer = this.parentElement.parentElement;
    let index = cardContainer.getAttribute('data-index');
    let currentReadStatus = myLibrary[index].readStatus;
    if(currentReadStatus == "Unread") {
        myLibrary[index].readStatus = "Read";
        showBookCards();
    } else {
        myLibrary[index].readStatus = "Unread";
        showBookCards();
    }
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
    const readCheck = document.querySelector('#read-Check').checked;

    card.classList.add('single-card');
    card.dataset.index = index;
    text.classList.add('bookInfo');
    btnDiv.classList.add('btnDiv');
    deleteBtn.classList.add('delBtn');
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener('click', deleteBookCard)
    readStatusBtn.classList.add('readBtn');
    readStatusBtn.addEventListener('click', toggleReadButton)
    
    let readStatusBtnText;

    if (readCheck === true) {
        readStatusBtnText = "Mark as Unread"
    } else {
        readStatusBtnText = "Mark as Read"
    }

    readStatusBtn.innerText = readStatusBtnText;

    
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
    const readCheck = document.querySelector('#read-Check').checked;
    let bookReadStatus;
    if (readCheck === true) {
        bookReadStatus = 'Read'
    } else {
        bookReadStatus = 'Unread'
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
      