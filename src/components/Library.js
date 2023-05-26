import { useState } from "react";
import Shelf from "./Shelf";

const Library = () => {
  const [shelves, setShelves] = useState([
    {
      genre: "Fiction",
      books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
        { title: "Beloved", author: "Toni Morrison" },
        { title: "The Color Purple", author: "Alice Walker" },
      ],
    },
    {
      genre: "Mystery",
      books: [
        { title: "Gone Girl", author: "Gillian Flynn" },
        { title: "The Underground Railroad", author: "Colson Whitehead" },
        { title: "IQ", author: "Joe Ide" },
        { title: "Blacktop Wasteland", author: "S. A. Cosby" },
      ],
    },
  ]);

  return (
    <section>
      {shelves.map((shelf, index) => (
        <Shelf key={index} genre={shelf.genre} books={shelf.books} />
      ))}
    </section>
  );
};

export default Library;
