import { useState } from "react";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value)
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value)
  };

  const submitHandler =(e)=>{
    e.preventDefault();

    const productData={
        title:title,
        date:date
    }
    console.log(productData)
    setTitle('');
    setDate('');
    console.log()
  }

  return (
    <form className="flex justify-center items-center h-screen w-screen" onSubmit={submitHandler}>
      <div className="">
        <label>Title</label>
        <input
          type="text"
          className="border p-4 "
          onChange={titleChangeHandler}
          value={title}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-12"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <button type="submit" className="px-5 py-2 border border-blue-600">
        Add product
      </button>
    </form>
  );
};

export default ProductForm;
