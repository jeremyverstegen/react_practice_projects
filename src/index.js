import React from 'react';
import ReactDom from 'react-dom';

import './index.css';


function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
};

const author = 'Delia Owens';

const Book = () => {
  const title = 'Where the Crawdads Sing';
  return (
    <article className='book'>
        <img src='https://m.media-amazon.com/images/I/41P9cpPL0gL._SY346_.jpg' alt='book' />
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
  )
};


ReactDom.render(<BookList />, document.getElementById('root'));