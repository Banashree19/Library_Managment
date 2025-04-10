const BookCard = ({ book, onBorrow, isBorrowed, disabled }) => (
  <div className="font-sans border p-4 rounded-lg shadow bg-white">
    <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
    <p className="text-gray-600 mb-3">by {book.author}</p>

    {!isBorrowed && (
      <button
        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded shadow hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed inline-block"
        onClick={() => onBorrow(book)}
        disabled={disabled}
      >
        Borrow
      </button>
    )}
  </div>
);
