import React, { useState } from "react";
import LikeButton from "./LikeButton";

function CounterMain() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <LikeButton />
      <h1 className="font-bold" id="heading">
        Use State
      </h1>
      <button
        onClick={() => {
          let value = prompt("Enter the name of heading");
          let heading = document.getElementById("heading");
          heading.innerHTML = value;
        }}
      >
        Edit Heading
      </button>
      <br />
      <button onClick={() => {}}>Dark/light mode</button>
      <br />
      <br />
      <div>
        <h1>Create an array with state and when button clicked ask something to write and when clicked ok it should show as a points like a mini to-do with only adding to-do facility</h1>
      <br />
      <button
        onClick={() => {
          let value1 = prompt("Write your feedback");
          setItems([...items, value1]);
          console.log(items);
          let list = document.createElement("li");
          list.innerHTML = value1;
        }}
      >
        Add Task
      </button>
        <br />
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <h1>Create 10 boxes having 10 fruits names and each fruit have a like button and like count when button clicked increase like count of the particular fruit.
      </h1>
      <br />
      <div className="flex">
        Apple
        <LikeButton />
      </div>

      <div className="flex">
        Orange
        <LikeButton />
      </div>

      <div className="flex">
        Mango
        <LikeButton />
      </div>

      <div className="flex">
        Grape
        <LikeButton />
      </div>

      <div className="flex">
        Guava
        <LikeButton />
      </div>
    </div>
  );
}

export default CounterMain;
