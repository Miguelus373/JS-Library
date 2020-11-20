let library = [];

let t = document.getElementById("title");
let a = document.getElementById("author");
let p = document.getElementById("pages");
let no = document.getElementById("unread");
let yes = document.getElementById("read");
let cardGroup = document.querySelector(".card-group")

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function createBook() {
  if (validation()) {
    addToLibrary();
    cards(library[library.length - 1]);
    resetForm()
  }
}

function validation() {
  let ti = t.value;
  let ai = a.value;
  let pi = p.value;

  if (ti === '' || ai === '' || pi === '') {
    alert('There are some fields missing');
    return false
  }

  return true
}

function addToLibrary() {
  let newBook;

  if (no.checked) {
    newBook = new Book(t.value, a.value, p.value, 'Unread');
  } else {
    newBook = new Book(t.value, a.value, p.value, 'Read');
  }

  return library.push(newBook);
}

function resetForm() {
  t.value = ''
  a.value = ''
  p.value = ''
}

function cards(card) {
  let cardy = document.createElement("div");
  cardy.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h4");
  cardTitle.textContent = `Title: ${card.title}`;

  let cardAuthor = document.createElement("p");
  cardAuthor.textContent = `Author: ${card.author}`;

  let cardPages = document.createElement("p");
  cardPages.textContent = `${card.pages} Pages`;

  let cardStatus = document.createElement("p");
  cardStatus.textContent = `Status: ${card.read}`;
  
  let cardDelete = document.createElement("button");
  cardDelete.innerHTML = "Remove";
  cardDelete.setAttribute("id","btn-remove");
  cardDelete.addEventListener("click", (event) => { 
    event.target.parentNode.parentNode.remove();
  })

  cardBody.append(cardTitle, cardAuthor, cardPages, cardStatus, cardDelete);
  cardy.appendChild(cardBody);
  cardGroup.appendChild(cardy)
}

function removebuttons() {

}