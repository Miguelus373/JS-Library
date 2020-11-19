let library = [];

let t = document.getElementById("title");
let a = document.getElementById("author");
let p = document.getElementById("pages");
let no = document.getElementById("unread");
let yes = document.getElementById("read");
let cardGroup = document.querySelectorAll(".card-group")
cardGroup.style.color = "blue";

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function validation() {
  let ti = t.value;
  let ai = a.value;
  let pi = p.value;

  if (ti === '' || ai === '' || pi === '') {
    console.log('All fields should be filled');
    alert('All fields should be filled');
    return false
  }

  return true
}

function getInputValue() {
  let newBook;

  if (no.checked) {
    newBook = new Book(t.value, a.value, p.value, 'No');
  } else {
    newBook = new Book(t.value, a.value, p.value, 'Yes');
  }

  return library.push(newBook)
}

function createBook() {
  if (validation()) {
    getInputValue();
    display();
  }
}

function display() {
  for(let i = 0; i < library.length; i++){
      cards(library[i]);
  }
}

function cards(card) {
   let cardy = document.createElement("div");
   cardy.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
   

    let cardTitle  = document.createElement("h4");
    cardTitle.textContent = card.title;
    cardBody.appendChild(cardTitle);

    let cardAuthor = document.createElement("p");
    cardAuthor.textContent = card.author;
    cardBody.appendChild(cardAuthor);

    let cardPages  = document.createElement("p");
    cardPages.textContent = card.pages;
    cardBody.appendChild(cardPages);

    let cardStatus  = document.createElement("p");
    cardStatus.textContent = card.read;
    cardBody.appendChild(cardStatus);


     cardy.appendChild(cardBody);

     cardGroup.appendChild(cardy)
}