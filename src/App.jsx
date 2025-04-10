
import { useState } from "react";
import { booksData } from "../src/data/book";
import BookList from "./components/BookList";
import BorrowedList from "./components/BorrowedList";

function App() {
  const [availableBooks, setAvailableBooks] = useState(booksData);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrow = (book) => {
 
    if (borrowedBooks.length >= 2) {
      alert("You can only borrow 2 books at a time!");
      return;
    }
  

    if (borrowedBooks.find((b) => b.id === book.id)) {
      alert("You have already borrowed this book.");
      return;
    }
  
 
    const updatedBooks = availableBooks
      .map((b) =>
        b.id === book.id ? { ...b, copies: b.copies - 1 } : b
      )
      .filter((b) => b.copies > 0); 
  
    setAvailableBooks(updatedBooks);
    setBorrowedBooks([...borrowedBooks, { ...book }]);
  };
  const handleReturn = (bookToReturn) => {
    const confirmReturn = window.confirm(
      `Are you sure you want to return "${bookToReturn.title}"?`
    );
  
    if (!confirmReturn) return;
  
    const updatedBorrowed = borrowedBooks.filter(
      (book) => book.id !== bookToReturn.id
    );
    setBorrowedBooks(updatedBorrowed);
  
    const updatedAvailable = availableBooks.map((book) => {
      if (book.id === bookToReturn.id) {
        return { ...book, copies: book.copies + 1 };
      }
      return book;
    });
  
    setAvailableBooks(updatedAvailable);
  };
  

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
    <img
  src="/lib.jpg"
  alt="Library Banner"
  className="w-full max-h-64 object-cover rounded-lg mb-8 shadow"
/>
    
      <BookList books={availableBooks} onBorrow={handleBorrow} />
      <BorrowedList borrowedBooks={borrowedBooks} onReturn={handleReturn} />

    </div>
  );
}

export default App;

