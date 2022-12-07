import Books from './modules/Books.js';
import formatTs from './modules/DateTime.js';
import { load, showOnPage } from './modules/Router.js';

const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));

const dt = document.querySelector('.timer');

setInterval(() => {
  dt.innerHTML = formatTs();
}, 1000);

if (!window.location.hash) {
  window.location.hash = '#add';
}
load(books);

window.addEventListener('hashchange', () => {
  load(books);
});

showOnPage();
