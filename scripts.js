let library = [];

function Book([title, author, pages, read]) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function validation(form) {
  let inputValid = form;

  if (form[0] == '' || form[1] == '' || form[2] == '') {
    alert('Check your data')
  } else {
    library.push(form)
  }
}

function getInputValue() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status;

  if (document.getElementById("unread").checked) {
    status = document.getElementById("unread").value;
  } else {
    status = document.getElementById("read").value;
  }

  let inputs = [title, author, pages, status];
  return inputs
}

function onclickk() {
  validation(getInputValue())
}