import { Button, Label, TextInput} from "flowbite-react";
import { useState } from "react";

const Donate = () => {
  const bookCategories = ["New", "Like New", "Used", "Good", "Fair", "Poor"];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const transactionOptions = ["Donate", "Sell"];
  const [selectedTransactionOption, setSelectedTransactionOption] = useState(
    transactionOptions[0]
  );

  const handleChangeTransactionOption = (event) => {
    setSelectedTransactionOption(event.target.value);
  };

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const username = form.username.value;
    const contact = form.contact.value;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const category = form.categoryName.value;
    const transactionOption = form.transactionOption.value;
    const price = form.price.value;

    const bookObj = {
      username,
      contact,
      bookTitle,
      authorName,
      category,
      transactionOption,
      price
    };
    console.log(bookObj);

    // send data to database
    fetch("http://localhost:5000/submit-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        alert("Request to Donate/Sale, Successfully!");
        form.reset();
      });
  };

  return (
    <div className="mt-28 px-4 lg-px24">
      <h2 className="text-center mb-8 text-3xl font-bold">Donate/Sell Book Request Form</h2>
      <div className="flex justify-center items-center">
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* First Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your Name" />
            </div>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="contact" value="Email" />
            </div>
            <TextInput
              id="contact"
              name="contact"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        {/* Second Row */}
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
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Condition" />
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

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Donate/Sell" />
          </div>
          <select
            id="inputState"
            name="transactionOption"
            className="w-full rounded"
            value={selectedTransactionOption}
            onChange={handleChangeTransactionOption}
          >
            {transactionOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </div>
        </div>
        

        {/* Donation/Sale Price */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="price" value="Donation/Sale Price" />
          </div>
          <TextInput
            id="price"
            name="price"
            type="number"
            placeholder="Sale Price (For donation enter 0)"
            required
          />
        </div>
        <Button type="submit" className="mt-5">
          Send Request
        </Button>
      </form>
      </div>
    </div>
  );
};

export default Donate;
