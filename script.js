'use strict';

const authors = [
    {
      key: 'А',
      items: [
        {
          author: 'Адамс Гай',
          books: [
            {
              genre: 'Детские книги',
              title: 'Очень добрая история',
              year: '2020',
              img: 'book-cover-345.jpg',
              price: '560 ₽',
              summary: 'Мудрая и добрая сказка, в которой просто и проникновенно говорится о самом важном: о дружбе, любви, о том, как важно помогать друг другу. Книга знакомит читателя с историей девочки Анны, которая приехала в маленький угрюмый городок. Своими поступками она запустила цепочку добрый дел и подружила всех жителей города, которые уже и забыли, как радоваться жизни.',
            },
            {
              genre: 'Детские книги',
              title: 'Чудище по имени Лень',
              year: '2019',
              img: 'book-cover-348.jpg',
              price: '480 ₽',
              summary: 'Сказка о необычном чудовище, которое иногда приходит ко всем. Герои сказки узнают, что это самая обычная лень, которая живёт в каждом из нас. На борьбу с ленью они приглашают звёздного мага, который способен победить чудовище.',
            },
            {
              genre: 'Детские книги',
              title: 'Загадка таинственного озера',
              year: '2018',
              img: 'book-cover-347.jpg',
              price: '630 ₽',
              summary: 'Тайну этого озера не могут разгадать уже много лет. Но оно совсем не страшное, а наоборот, с волшебной и чистой водой, способной дать силу и уставшему путнику и раненому зверю.',
            },
          ],
        },
        {
          author: 'Агутин Леонид',
          books: [
            {
              genre: 'Детские книги',
              title: 'Лесной оркестр',
              year: '2019',
              img: 'book-cover-346.jpg',
              price: '1100 ₽',
              summary: 'Все жители леса объединились, чтобы устроить Мишке сюрприз на День Рождения. Что же было подарком на День Рождения и как отметили этот день лесные жители.',
            },
            {
              genre: 'Художественная литература',
              title: 'Хранитель снов',
              year: '2016',
              img: 'book-cover-353.jpg',
              price: '460 ₽',
              summary: 'Происходит ужасное – у всех людей в мире пропали добрые сны и мечты. На помощь приходит хранитель снов. Но ему не обойтись без помощи своих юных друзей.',
            },
          ],
        },
      ],
    },
    {
      key: 'Б',
      items: [
        {
          author: 'Белицкая Светлана',
          books: [
            {
              genre: 'Хобби и досуг',
              title: 'Беззаботная лама',
              year: '2017',
              img: 'book-cover-350.jpg',
              price: '460 ₽',
              summary: 'Легкая и юмористическая история о ламе, которую ничего никогда не заботит. У нее все всегда хорошо. Ничто на свете не может огорчить беззаботную ламу.',
            },
          ],
        },
      ],
    },
    {
      key: 'В',
      items: [
        {
          author: 'Вагнер Марк',
          books: [
            {
              genre: 'Художественная литература',
              title: 'Единорожка',
              year: '2015',
              img: 'book-cover-354.jpg',
              price: '760 ₽',
              summary: 'Приключения забавного и неуклюжего единорожки Лилу, который отправился на поиски друзей. Добрая и поучительная история, полная забавных приключений.',
            },
          ],
        },
      ],
    },
    {
      key: 'Г',
      items: [],
    },
    {
      key: 'Д',
      items: [],
    },
    {
      key: 'Е',
      items: [],
    },
    {
      key: 'Ё',
      items: [],
    },
    {
      key: 'Ж',
      items: [],
    },
    {
      key: 'И',
      items: [],
    },
    {
      key: 'Й',
      items: [],
    },
    {
      key: 'К',
      items: [],
    },
    {
      key: 'Л',
      items: [],
    },
    {
      key: 'М',
      items: [],
    },
    {
      key: 'Н',
      items: [],
    },
    {
      key: 'О',
      items: [],
    },
    {
      key: 'П',
      items: [],
    },
    {
      key: 'Р',
      items: [],
    },
    {
      key: 'С',
      items: [],
    },
    {
      key: 'Т',
      items: [],
    },
    {
      key: 'У',
      items: [],
    },
    {
      key: 'Ф',
      items: [],
    },
    {
      key: 'Х',
      items: [],
    },
    {
      key: 'Ц',
      items: [],
    },
    {
      key: 'Ч',
      items: [],
    },
    {
      key: 'Ш',
      items: [],
    },
    {
      key: 'Щ',
      items: [],
    },
    {
      key: 'Ы',
      items: [],
    },
    {
      key: 'Э',
      items: [],
    },
    {
      key: 'Ю',
      items: [],
    },
    {
      key: 'Я',
      items: [],
    },
];

const navContainer = document.querySelector('.site-nav');
const authorContainer = document.querySelector('.authors-section');
const booksContainer = document.querySelector('.books');

const addChildElementsFromString = (parent, domString) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeend', domString);
}

// Создание алфитного указателя
const createNavItemString = ({key, items}) => 
  // Создание разметки через шаблонную строку
    `<li class="site-nav-item">
        <a class="site-nav-link" ${items.length > 0 ? `href="#${key}"` : ''} >${key}</a>
    </li>`;

// Создание алфитного указателя
const createSectionString = ({key, items}) => 
  // Создание разметки через шаблонную строку
    `<section class="authors-section">
        <h2 id="${key}">${key}</h2>
        <ul class="author-list">
            ${items.map(({author, books}) => {
              // Склонение количества книг через библиотеку Declension
          const declension = window.getDeclension({count: books.length, one: 'книга', few: 'книги', many: 'книг'}); 
          return `
            <li class="author-item">
              <a class="author-link" data-value="${author}" href="#">
                <h3>${author}</h3>
                <p>${declension}</p>
              </a>
            </li>`;}).join('')}
        </ul>
      </section>`;

// Создание "заглушки" (когда не выбран ни один автор)
 const createEmptyBookString = () => `<h2>Книги</h2> <p>Нажмите на автора, чтобы посмотреть список его книг</p>`;

 // Создание списка книг, выбранного атвтора
 const createAuthorBooksString = ({author, books}) => 
 `
  <h2>${author}</h2>
    <ul class="book-list">
    ${books.map(({title, year, img, price, summary}) => ` 
    <li class="book-item">
      <article class="book">
        <img src="img/${img}" width="95" height="130" alt="${title}">
        <div class="title-wrapper">
          <h3>${title}</h3>
          <p class="year">${year}</p>
        </div>
        <p class="price">${price}<a class="cart" href="#">Купить</a></p>
        <p class="description">${summary}</p>
        <a class="more" href="#">Читать дальше</a>
      </article>
    </li>`).join('')}
    </ul>
`
// Обработчик собыия клика на автора
const authorClickHandler = (e) => {
  e.preventDefault();
  const element = e.target.closest('a');

  if(!element) {
    return
  }

// Получение дата атрибута 
const {value} = element.dataset;

// ??
const authorsGroup = authors.find(({key}) => value.toUpperCase().indexOf(key.toUpperCase()) === 0);

if (authorsGroup && authorsGroup.items) {
 const currentAuthor = authorsGroup.items.find((item) => item.author === value);

 if(currentAuthor) {
   const bookString = createAuthorBooksString(currentAuthor);

   booksContainer.innerHTML = '';
   booksContainer.insertAdjacentHTML('beforeend', bookString);
 }
}

console.log(value)
console.log(authorsGroup)

}

// Обработчик собыия клика (скрыть/показать детальное описание)
const moreClickHandler = (e) => {
  e.preventDefault();

  const element = e.target.closest('a.more');
  console.log(element);

  if(!element) {
    return
  }

  const bookContainer = element.closest('.book');
  const description = bookContainer.querySelector('.description');

  if(description) {
    description.classList.toggle('short');
    element.textContent = description.classList.contains('short') ? 'Читать дальше' : 'Скрыть описание';
  }
}

// Обработчик собыия клика (плавный скролл к букве алфавита)
const navItemClickHandler = (e) => {
  e.preventDefault();

  const element = e.target.closest('a');

  if(!element){
    return
  }

  const blockID = element.getAttribute('href');

  if(blockID && blockID !== '#') {
    const block = document.querySelector(blockID);

    if (block) {
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
      
// Отрисовка элементов
const render = () => {
    // Очищаем список с навигацией
    const navElementsString = authors.map(item => createNavItemString(item)).join('');
    const sectionString = authors.map(item => createSectionString(item)).join('');    
    const emptyBookElementString = createEmptyBookString();

    addChildElementsFromString(navContainer, navElementsString);
    addChildElementsFromString(authorContainer, sectionString);
    addChildElementsFromString(booksContainer, emptyBookElementString);

}

// Инициализация функции
const init = () => {
    render();
    authorContainer.addEventListener('click', authorClickHandler);
    booksContainer.addEventListener('click', moreClickHandler);
    navContainer.addEventListener('click', navItemClickHandler);
}

init();