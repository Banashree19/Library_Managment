import { useState, useEffect } from 'react';
import { books as fakeDB } from '../data/book.js';
import BookCard from '../components/BookCard';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBooks(fakeDB); 
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-sans text-center text-indigo-800 mb-8"> Library Books</h1>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-400 italic">No books available in the library.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
