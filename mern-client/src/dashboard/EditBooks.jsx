import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, bookDescription, bookPDFURL} = useLoaderData();
  
  const bookCategories = [
    "Programming",
    "Business",
    "DSA",
    "SE",
    "DBMS",
    "CN",
    "OS",
    "AI",
    "ML",
    "DS",
    "UX/UI",
    "Cybersecurity",
    "Mathematics",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };
  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);
    //update book
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH", 
      headers:{
        "Content-Type":"application/json"},
        body:JSON.stringify(updateBookObj)
    }).then(res =>  res.json()).then(data => {
      alert("Book Updated Successfully!")
  })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* First Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              defaultValue={bookTitle}
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            type="text"
            name="bookDescription"
            placeholder="Write a book description..."
            rows={6}
            className="w-full"
            required
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks