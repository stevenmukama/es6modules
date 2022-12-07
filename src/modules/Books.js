export default class Books {
  constructor(books) {
    this.books = books;
  }

  get = () => this.books;

  update = () => {
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  addBook = ({ e, title, author }) => {
    this.books.push({ title, author });
    this.bookToDom(title, author);
    localStorage.setItem('books', JSON.stringify(this.books));
    const form = document.querySelector('form');
    form.reset();

    this.update();

    window.location.assign('#list');
    e.preventDefault();
  }

  showList = () => {
    const addbook = document.querySelector('.area');
    const showbook = document.querySelector('.show-book-list');
    const contactme = document.querySelector('.contact-me');
    showbook.style.display = 'flex';
    addbook.style.display = 'none';
    contactme.style.display = 'none';
  }

  createBookFromLocal = () => {
    if (this.books.length === 0) {
      window.location.assign('#add');
    }
    for (let i = 0; i < this.books.length; i += 1) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'block';
      const book = this.bookToDom(this.books[i].title, this.books[i].author);
      booksShow.appendChild(book);
    }
  }

  bookToDom = (title, author) => {
    const book = document.createElement('li');
    book.setAttribute('title', title);
    const p = document.createElement('p');
    p.innerHTML = `${title} by ${author}`;
    book.append(p);
    const remove = document.createElement('button');
    remove.innerText = 'remove';
    remove.addEventListener('click', () => {
      this.remove(title);
    });
    book.append(remove);
    return book;
  }

  remove = (title) => {
    const removedBooks = this.books.filter((item) => item.title !== title);
    localStorage.setItem('books', JSON.stringify(removedBooks));
    const removedBook = document.querySelector(`li[title='${title}']`);
    removedBook.remove();
    this.update();
    removedBook.style.display = 'none';
    if (this.books.length === 0) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'none';
      window.location.assign('#add');
    }
  }
}
