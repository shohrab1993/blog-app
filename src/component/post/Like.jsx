import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLikes } from "../../feature/likes/likseSlice";

const Like = ({ id, likes }) => {
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(likes);
  const { updatedLikes } = useSelector((state) => state.like);

  const data = {
    id,
    likes: increment,
  };

  const handleIncreasedLikes = () => {
    dispatch(updateLikes(data));
    setIncrement(likes + 1);
  };

  return (
    <button
      className="like-btn"
      id="lws-singleLinks"
      onClick={handleIncreasedLikes}
    >
      <i className="fa-regular fa-thumbs-up"></i>
      {increment}
    </button>
  );
};

export default Like;
