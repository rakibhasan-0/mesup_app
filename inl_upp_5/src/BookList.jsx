"use strict";
import React, { useState } from 'react';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]); 
    const [name, setName] = useState('');
    const [author, setAuthor] = useState(''); 
    const [year, setYear] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addBook = () => {

       if (name && author && year) {
            if (editIndex === null) {
                setName(name);
                setAuthor(author);
                setYear(year);
                setBooks([...books, { name, author, year }]);
            } else {
                const updatedBooks = [...books];
                updatedBooks[editIndex] = { name, author, year };
                setBooks(updatedBooks);
                setEditIndex(null);
            }

            setName("");
            setAuthor("");
            setYear("");

        } else {
            alert("Please fill out all fields");
        }
    };

    const editBook = (index) => {
        const book = books[index];
        setName(book.name);
        setAuthor(book.author);
        setYear(book.year);
        setEditIndex(index);
    };

    return (
      <div className="book-list">
        <h4>Book</h4>
        <div className="from-container">
            <form>
                <div className="from-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="from-group">
                    <label> Author: </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="from-group">
                    <label> Year: </label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
          </form>
        </div>

        <button onClick={addBook} className="book-button">
          {editIndex === null ? "Add" : "Update"}
        </button>

        <h4>Book List</h4>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
                <div className="book-block">
                    <p>
                        <strong>Name:</strong> {book.name}
                    </p>
                    <p>
                        <strong>Author:</strong> {book.author}
                    </p>
                    <p>
                        <strong>Year:</strong> {book.year}
                    </p>
                    <button
                        onClick={() => setBooks(books.filter((_, i) => i !== index))}
                        className='delete-button'
                    >Delete
                    </button>
                    <button 
                        onClick={() => editBook(index)}
                        className='edit-button'
                    >Edit
                    </button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default BookList;
