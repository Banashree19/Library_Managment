export default function BookList({ books, onBorrow }) {
  return (
    <div className="text-center font-sans"> 
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to the Library
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 rounded-xl shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:ring-2 hover:ring-blue-200"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
            <p className="text-sm text-gray-600 italic">{book.author}</p>
            <p className="text-sm text-gray-700"> Copies: {book.copies}</p>

            <button
              onClick={() => onBorrow(book)}
              disabled={book.copies === 0}
              className={`mt-3 w-full px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
                book.copies === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
              }`}
            >
              {book.copies === 0 ? "Out of Stock" : "✨ Borrow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

