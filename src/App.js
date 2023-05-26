import { useState } from 'react';
import './App.css';
import LibraryContext from './LibraryContext';
import Library from './components/Library';


function App() {
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
    <LibraryContext.Provider value={ { shelves, setShelves } }>
      <div className="App">
        <Library />
      </div>
    </LibraryContext.Provider>
  );
}

export default App;
