import Add from './view/add.js';
import Show from './view/show.js';
import Contact from './view/contact.js';

const routes = [
  { path: '/', View: Add },
  { path: 'list', View: Show },
  { path: 'contact', View: Contact },
  { path: 'add', View: Add },
];

const showOnPage = () => {
  routes.forEach((route) => {
    if (route.path !== '/') {
      const current = document.getElementById(route.path);
      if ((`#${route.path}`) === window.location.hash) {
        current.classList.add('current');
      } else {
        current.classList.remove('current');
      }
    }
  });
};

const load = async (books) => {
  const fragmentId = window.location.hash.substr(1);

  const route = routes.filter((route) => route.path === fragmentId);

  const view = new route[0].View();

  document.querySelector('#awesome').innerHTML = await view.getDoc();

  showOnPage();

  await view.getJs(books);
};

export { routes, showOnPage, load };