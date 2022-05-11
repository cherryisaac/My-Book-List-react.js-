import ReactDOM from 'react-dom'
import './index.css'
import books from './books'
import Book from './Book'



function BookList(){
  return (
    <section className='booklist'>
     {books.map((book) => {
       return <Book key={book.id} {...book}/>
     })}
    </section>
  )
}

BookList.defaultProps ={
  color: 'red'
}

ReactDOM.render(<BookList/>, document.getElementById('root'))