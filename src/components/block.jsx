import React from "react";
import Heading from "./heading";
import Para from "./para";
import Img from "./img";
function block() {
  return (
    <div>
      <Heading head="hello world" />
      <Para paragraph="this is a paragraph" />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jrwvSBxY3VxhOM708i8Jhb-PhKokOa7pKQ&s" />
    </div>
  );
}

export default block;
