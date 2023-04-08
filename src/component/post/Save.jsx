import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changedSaved } from "../../feature/save/savedSlice";

const Save = ({ id, isSaved }) => {
  const dispatch = useDispatch();
  const [saveUpdate, setSaveUpdate] = useState(isSaved);

  const data = {
    id,
    isSaved: saveUpdate,
  };
  const handleSave = () => {
    dispatch(changedSaved(data));
    setSaveUpdate(!saveUpdate);
  };

  return (
    <button
      className={`${isSaved && "active"}  save-btn`}
      id="lws-singleSavedBtn"
      onClick={handleSave}
    >
      <i className="fa-regular fa-bookmark"></i> Saved
    </button>
  );
};

export default Save;
