import Books from './modules/Books.js';
import { load, showOnPage } from './modules/Router.js';
import time from './modules/luxons.js';

const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));

const dates = document.querySelector('.timer');

dates.innerHTML = time();

if (!window.location.hash) {
  window.location.hash = '#add';
}
load(books);

window.addEventListener('hashchange', () => {
  load(books);
});

showOnPage();
