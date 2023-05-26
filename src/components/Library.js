import { useContext, useState } from "react";
import Shelf from "./Shelf";
import LibraryContext from "../LibraryContext";

const Library = () => {
 
  const { shelves } = useContext(LibraryContext)
  return (
    <section>
      {shelves.map((shelf, index) => (
        <Shelf key={index} genre={shelf.genre} />
      ))}
    </section>
  );
};

export default Library;
