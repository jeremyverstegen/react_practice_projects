import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_UY218_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/91QA8vBmgbL._AC_UY218_.jpg',
    title: 'Exiles',
    author: 'Ashley Saunders & Leslie Saunders'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_UY218_.jpg',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid'
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} /> 
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('hello world');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book'>
        <img src={img} alt='' />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Reference example</button>
        <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));