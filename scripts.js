/* eslint-disable no-unused-vars */

const library = [];

const t = document.getElementById('title');
const a = document.getElementById('author');
const p = document.getElementById('pages');
const no = document.getElementById('unread');
const cardGroup = document.querySelector('.card-group');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  validation() {
    if (this.title === '' || this.author === '' || this.pages === '') {
      // eslint-disable-next-line no-alert
      alert('There are some fields missing');
      return false;
    }
    return true;
  }

  addToLibrary() {
    library.push(this);
  }
}

function resetForm() {
  t.value = '';
  a.value = '';
  p.value = '';
}

function addButtons(card) {
  const cardDelete = document.createElement('button');
  cardDelete.innerHTML = 'Remove';
  cardDelete.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.remove();
  });

  const toggleStatus = document.createElement('button');
  toggleStatus.innerHTML = 'Toggle Status';
  toggleStatus.addEventListener('click', (event) => {
    const status = event.target.parentNode.lastElementChild;
    status.innerHTML = status.innerHTML === 'Status: Unread' ? 'Status: Read' : 'Status: Unread';
  });

  card.append(cardDelete, toggleStatus);
}

function cards(card) {
  const cardy = document.createElement('div');
  cardy.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h4');
  cardTitle.textContent = `Title: ${card.title}`;

  const cardAuthor = document.createElement('p');
  cardAuthor.textContent = `Author: ${card.author}`;

  const cardPages = document.createElement('p');
  cardPages.textContent = `${card.pages} Pages`;

  const cardStatus = document.createElement('p');
  cardStatus.textContent = `Status: ${card.read}`;

  addButtons(cardBody);
  cardBody.append(cardTitle, cardAuthor, cardPages, cardStatus);
  cardy.appendChild(cardBody);
  cardGroup.appendChild(cardy);
}

function createBook() {
  const newBook = new Book(t.value, a.value, p.value, no.checked ? 'Unread' : 'Read');

  if (newBook.validation()) {
    newBook.addToLibrary();
    cards(library[library.length - 1]);
    resetForm();
  }
}