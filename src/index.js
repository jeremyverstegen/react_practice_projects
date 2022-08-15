import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import { books } from './books';
import Book from './BookComponent';


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} /> 
      })}
    </section>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));