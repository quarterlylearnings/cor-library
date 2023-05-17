const Book = (props) => {
    return (
        <article>
            <h4>{ props.title }</h4>
            <p>{ props.author }</p>
        </article>
    )
}

export default Book