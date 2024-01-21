import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const {_id, bookTitle, imageURL, bookDescription, bookPDFURL} = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24 text-center">
    <img src={imageURL} alt="" className="h-96 mx-auto" style={{ display: "block" }}/>
    <h2 className="font-bold text-3xl mt-4">
        {bookTitle}
    </h2>
    <p style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
        {bookDescription}
    </p>
    <a href={bookPDFURL} className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded">Read More</a>
    </div>
  )
}

export default SingleBook