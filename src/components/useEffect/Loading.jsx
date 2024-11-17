import React, { useEffect, useState } from "react";

function Loading() {
  const [change, setChange] = useState(true);
  const [like, setLike] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 5000);
  }, []);
  useEffect(() => {
    if (like) {
      alert("you have liked it");
    } else {
      alert("you have unliked it");
    }
  }, [like]);
  useEffect(() => {
    if (!change) {
      prompt("how r u");
    } else {
      alert("welcome");
    }
  }, [change]);

  const likeFunction = () => {
    setLike(!like);
  };

  return (
    <div>
     
      <div>

      <button onClick={likeFunction}> {like ? "liked" : "unlike"}</button>
      </div>
    </div>
  );
}

export default Loading;
