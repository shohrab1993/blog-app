import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../feature/filter/filterSlice";

const SideBarFilter = () => {
  const [radio, setRadio] = useState("all");
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filters);
  const handleFilter = (value) => {
    dispatch(addFilter(value));
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            checked={filter === "all"}
            value={filter}
            className="radio"
            onChange={(e) => setRadio(e.target.value)}
            onClick={() => handleFilter("all")}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            checked={filter === "saved"}
            value={filter}
            onChange={(e) => setRadio(e.target.value)}
            onClick={() => handleFilter("saved")}
            className="radio"
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
