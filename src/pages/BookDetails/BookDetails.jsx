import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const{id} = useParams();
    const detailsId = parseInt(id)
    const data = useLoaderData();
    const bookDetails = data.find(book => book.bookId === detailsId)

    const {author, category, publisher, rating, review, tags, totalPages, yearOfPublishing, image, bookName} = bookDetails;
    // console.log(bookDetails)
    // console.log(id,data)
    return (
            <div className='m-10 '>
                <div className="w-3/12 flex justify-center   bg-gray-950 h-60 items-center">
                    <figure>
                        <img
                        className='h-[200px]  w-12/12'
                        src={image}
                        alt="Shoes" />
                    </figure>
                </div> 
                <div className='mt-10 w-3/12 flex justify-center '>
                <button className='p-2 rounded-2xl bg-gray-950  w-30  mr-5'>Read</button>
                <button className='p-2 rounded-2xl bg-gray-950  w-30  ' >Wish List</button>
                </div>
            </div>
                     
    );
};

export default BookDetails;