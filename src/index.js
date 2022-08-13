import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_UY218_.jpg',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens'
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/91QA8vBmgbL._AC_UY218_.jpg',
  title: 'Exiles',
  author: 'Ashley Saunders & Leslie Saunders'
};

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}
      >
        <p>Lorem Ipsum</p>
      </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} 
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h4>{author}</h4>
        {children}
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));