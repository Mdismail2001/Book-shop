import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // console.log(allBooks)
    // useEffect(()=>{
    //     fetch('/public/booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // },[])
    // console.log(data)
    return (
        <div className='mt-10'>
            <h1 className='text-2xl text-center font-bold'>All Books</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
            <Suspense fallback={<span>Loading books....</span>}>
                    {
                        data.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;