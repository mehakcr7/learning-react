import React from "react";
import Block from "./Block";

function Main() {
  const details = {
    heading: "main heading",
    paragraph: "This is a paragraph",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jrwvSBxY3VxhOM708i8Jhb-PhKokOa7pKQ&s",
  };
  return (
    <div>
      <Block
        heading={details.heading}
        paragraph={details.paragraph}
        src={details.src}
      />
    </div>
  );
}

export default Main;
