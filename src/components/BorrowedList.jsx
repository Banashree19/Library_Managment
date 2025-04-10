import React from "react";

const BorrowedList = ({ borrowedBooks, onReturn }) => {
  return (
    <div className="p-4 mt-6 border-t">
      <h2 className=" font-sans text-xl font-bold mb-2">Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p className="font-sans text-gray-500">You haven’t borrowed any books yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {borrowedBooks.map((book) => (
            <div
              key={book.id}
              className="border rounded p-4 shadow bg-gray-50 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
              <button
                className="mt-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => onReturn(book)}
              >
                Return
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedList;
