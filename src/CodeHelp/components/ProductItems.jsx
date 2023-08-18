import { Card } from "./Card";
import { ProductDate } from "./ProductDate";
import { useState } from "react";

export const ProductItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Rin Supreme");
    console.log("button clicked");
  };
  return (
    <Card>
      <ProductDate date={props.date} />
      <div>
        <h2>{title}</h2>
      </div>
      <button
        className="border-blue bg-rose-500 px-5 py-2 hover:border-2 hover:border-blue-700 hover:bg-transparent"
        onClick={clickHandler}
      >
        Add To Cart
      </button>
    </Card>
  );
};
