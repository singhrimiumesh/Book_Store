import { Link } from "react-router-dom";
import FavBookImg from "../assets/favoritebook.jpg";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Embark on a thrilling literary journey with a diverse collection of
          captivating books across genres. Join our vibrant community of avid
          readers to connect, discuss, and forge lasting literary connections.
          Register now for exclusive content and participate in engaging
          discussions. Unlock a world of knowledge with our extensive PDF
          downloads, providing access to educational resources that enrich your
          understanding and skills. Your next adventure awaits!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">Numerous</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Abundant</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Plentiful</h3>
            <p className="text-base">PDF Download</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
