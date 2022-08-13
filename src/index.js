import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_UY218_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens'
  },
  {
    img: 'https://m.media-amazon.com/images/I/91QA8vBmgbL._AC_UY218_.jpg',
    title: 'Exiles',
    author: 'Ashley Saunders & Leslie Saunders'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_UY218_.jpg',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid'
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book} /> 
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));