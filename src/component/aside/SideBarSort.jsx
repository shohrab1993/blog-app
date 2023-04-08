import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSorting } from "../../feature/filter/filterSlice";

const SideBarSort = () => {
  const [checkBox, setCheckBox] = useState("");
  const dispatch = useDispatch();
  const handleCheckBox = () => {
    dispatch(addSorting(checkBox));
  };

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        value={checkBox}
        onChange={(e) => setCheckBox(e.target.value)}
        onClick={handleCheckBox}
      >
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default SideBarSort;
