import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import {Link} from "react-router-dom";

const truncateDescription = (description, words) => {
  const wordArray = description.split(' ');
  const truncatedArray = wordArray.slice(0, words);
  return truncatedArray.join(' ');
};

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg-px24">
      <h2 className="text-5xl font-bold text-center">All Books Here</h2>

      <div className="grid gap-4 my-2 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 margin-bottom: 20px">
        {books.map((book) => 
          <Card key={book._id}>
            <Link to={`/book/${book._id}`} className="flex flex-col">
          <img src={book.imageURL}  alt="" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
            {truncateDescription(book.bookDescription, 15)}
            </p>
            <button className="bg-blue-700 text-sm font-semibold text-white py-1 px-2 rounded"> Read Now</button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Shop;
