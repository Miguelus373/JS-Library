let library = [];

let t = document.getElementById("title");
let a = document.getElementById("author");
let p = document.getElementById("pages");
let no = document.getElementById("unread");
let yes = document.getElementById("read");

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
  }
}