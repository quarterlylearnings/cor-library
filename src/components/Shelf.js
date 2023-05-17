import Book from "./Book"

const Shelf = (props) => {
    return (
        <section>
            <h2>{ props.genre }</h2>
            <section>
                <Book />
            </section>
        </section>
    )
}

export default Shelf