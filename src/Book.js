
import { useState } from "react";
import  books from './books'
import React from 'react'


const Book = () => {
    const [book, setBook] = useState(books)

  const removeItem = (id) => {
    setBook(book.filter((someBook) => someBook.id !== id))
  }

//   const toggleButton = (id) => {
//      setTasks(tasks.map((task) => task.id === id ?
//     { ...task, reminder : !task.reminder } : task))
//     setBook(book.map((someBook) => someBook.id === id ?
//     {...book}
//   }
  
  const title1 = 'This is a book'
  return (
  <article className='book'>
         <button type="button" style={{backgroundColor: 'springgreen'}} 
         onClick={()=> setBook()}>
      View Info</button>
        {book.map((booking) => {
            
           const {id, img, title, author} = booking;
            return (<>
            <div key={id} >
                <h1>{}</h1>
                <img src={img} alt="" />
                <h1>{title}</h1>
                <h3>{author}</h3>
                    <button style={{ backgroundColor: 'yellow' }}
                        onClick={() => removeItem(id)}>
                        Delete
                    </button>
                    </div>
                </>
            ) })}
  </article>
  ) 
}

export default Book

