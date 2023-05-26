import { useContext, useState } from "react"
import Book from "./Book"
import NewBookForm from "./NewBookForm"
import LibraryContext from "../LibraryContext"

const Shelf = ({genre}) => {
    const { shelves, setShelves } = useContext(LibraryContext)

    const books = shelves.find(shelf => shelf.genre === genre).books

    const addBook = book => {
        const updatedShelves = shelves.map(shelf => {
            if(shelf.genre === genre) {
                return {...shelf, book: [...shelf.books, book]}
            }
            return shelf
        });
        setShelves(updatedShelves)
    }

    return (
        <section>
            <h1>{ genre }</h1>
            {/* <NewBookForm addBook={addBook} /> */}
            <section>
                {
                    books ?
                    books.map((book, index) => <Book key={index} title={book.title} author={book.author}/>)
                    :
                    "Ain't no books"
                } 
            </section>
            <hr />
        </section>
    )
}

export default Shelf