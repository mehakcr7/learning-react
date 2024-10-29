import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Img from "./Image";

function Block({ heading, paragraph, src }) {
  return (
    <div>
      <Heading heading={heading} />
      <Para paragraph={paragraph} />
      <Img src={src} />
    </div>
  );
}

export default Block;
