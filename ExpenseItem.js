import "./ExpenseItem.css";



import React, { useState } from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [newTitle, setnewTitle] = useState("hi");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(newTitle);
    setnewTitle("")
  };
  const changeHandler = (event) => {
    setnewTitle(event.target.value);
  };
  return (
    <div className="expense-item">
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title </button>
    </div>
  );
};
export default ExpenseItem;


