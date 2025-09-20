import React from 'react';

const Banner = () => {
    return (
        <div className='flex gap-10 p-10 bg-gray-900 text-2xl font-bold'>
            <div className='w-6/12 items-center '> 
                <h1>A book is a collection of written, printed, or digital pages bound together, carrying knowledge, stories, or ideas. It can educate, inspire, or entertain readers. Books open doors to imagination, preserve history, and share experiences across generations. They remain powerful companions for learning, growth, and exploring endless worlds.</h1>
                <button className='bg-amber-500 p-2 w-full rounded-2xl mt-10'>Buy now</button>
            </div>
            <div>
                <img src="/src/assets/books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;