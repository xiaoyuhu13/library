let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

function addBookToLibrary(book) {
  myLibrary.push(book)
};

//use .forEach?
//use second loop to reduce code inside?
const bookshelf = document.getElementById('book-wrapper');
const book = document.getElementsByClassName('booktitle');

function displayBooks(myLibrary){

    let existingBooks = Array.from(book).map(book => book.innerHTML);
    let newBooks = myLibrary.map(book => book.title)

    for (let i = 0; i < myLibrary.length; i++){
        myLibrary[i].index = i;
    }

    let i = 0;
        //if the book doesn't already exist add to shelf
        newBooks.forEach(book => 
          {if (!existingBooks.includes(book)){
            let card = document.createElement('div');
            card.setAttribute('id', i)
          
            let title = document.createElement('h3');
            title.classList.add('booktitle')
            card.appendChild(title);
            title.textContent = myLibrary[i].title;
            let author = document.createElement('p');
            author.textContent = myLibrary[i].author;
            card.appendChild(author);
            let pages = document.createElement('p');
            pages.textContent = `pages: ${myLibrary[i].pages}`;
            card.appendChild(pages);

            let read = document.createElement('button');
            read.classList.add('readButton');
            read.textContent = 'Read';
            read.setAttribute('data-index', i)
            card.appendChild(read);
            let remove = document.createElement('button');
            remove.textContent = 'Remove';
            remove.classList.add('removeButton');
            remove.setAttribute('data-index', i)
            card.appendChild(remove);

            
            
            bookshelf.append(card);
          }   
          ++i;
        }
        )

      };     

//Initial Books
let achilles = new Book('The Song of Achilles', 'Madeline Miller', '416', 'yes');
let circe = new Book('Circe', 'Madeline Miller', '393', 'yes');

addBookToLibrary(achilles);
addBookToLibrary(circe);

window.onload = displayBooks(myLibrary);

//Remove Book
let removeBtns = document.getElementsByClassName("removeButton");
let removeBtnsArray = Array.from(removeBtns);
removeBtnsArray.forEach((button) => {
  button.addEventListener('click', function() {
    let index = button.getAttribute('data-index'); 
    const element = document.getElementById(index);
    element.remove();
    myLibrary.splice(index, 1)
  }); 
});


// //Read Button
// let readBtns = document.getElementsByClassName("readButton");
// let readBtnsArray = Array.from(readBtns);

// //Initial State
// readBtnsArray.forEach((button) => {
//   let index = parseInt(button.getAttribute('data-index'));
//   let readStatus = myLibrary[index].read;
//   readStatus? button.classList.add('read'): button.classList.remove('not-read');
// });

// readBtnsArray.forEach((button) => {
//   button.addEventListener('click', () => {
//     // button.classList.toggle('read');
//     // let index = parseInt(button.getAttribute('data-index'));
//     // let readStatus = myLibrary[index].read;
//     if (button.classList.contains('not-read')) {
//       button.classList.add('read');
//       button.classList.remove('not-read');
//     }
//     if(button.classList.contains('read')) {
//       button.classList.add('not-read')
//       button.classList.remove('read')
//     }
//   });
// });

    // for (var i = 0; i < readBtns.length; i++) {
    //     readBtns[i].addEventListener("click", function () {
    //       let index = readBtns[i].read;
    //       let readStatus = myLibrary[index].read;
    //       readStatus ? readBtns[i].classList.add('read') : readBtns[i].classList.add('not-read');
    //     });
    // }
 
    




//Form
const submit = document.getElementById('submit');
document.addEventListener('DOMContentLoaded', ()=>{
    submit.addEventListener('click', createBook);
});

const createBook = (ev) => {
    ev.preventDefault();
    let newBook = new Book(document.getElementById('title').value,
                           document.getElementById('author').value,
                           document.getElementById('pages').value,
                           document.getElementById('read').checked);
    addBookToLibrary(newBook);
    document.forms[0].reset();
    displayBooks(myLibrary);
    modal.style.display = "none";
};

//Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


