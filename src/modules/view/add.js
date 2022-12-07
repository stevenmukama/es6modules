import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Add Books');
  }

  getDoc = async () => `<section class="mainsection">
    <h3>Add a New Book</h3>

    <form id="bookForm">
        <input type="text" placeholder="Title" id="title">
        <br><br>
        <input type="text" placeholder="Author" id="author" >
        <br><br>
        <button id="add-books" type="submit">Add</button>
    </form>
    </section>`

  getJs = async (books) => {
    const button = document.getElementById('add-books');
    button.addEventListener('click', (e) => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      books.addBook({ e, title, author });
    });
  }
}