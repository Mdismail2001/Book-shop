import React from 'react';

const Book = ({book}) => {
    console.log(book)
    const {bookName, image, author,category,rating, publisher} = book;
    return (
        <div className='mx-auto justify-between border rounded mb-5 gap-5 '>
            <div className="card  shadow-sm  ">
            <figure className='bg-gray-950 m-5' >
                <img
                className=' w-1/3 h-[166px] m-5'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-10' >
                <h2 >Name: {bookName}</h2>
                <h6>Author Name: {author}</h6>
                </div>
                <div className='flex justify-between'>
                    <div className='w-6/12'> 
                    <p>Category: {category}</p>
                    <p>Rating: {rating}</p>
                    <p>Publisher: {publisher}</p>
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Book;