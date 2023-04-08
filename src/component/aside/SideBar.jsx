import React from "react";
import SideBarFilter from "./SideBarFilter";
import SideBarSort from "./SideBarSort";

const SideBar = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <SideBarSort />
        <SideBarFilter />
      </div>
    </aside>
  );
};

export default SideBar;
