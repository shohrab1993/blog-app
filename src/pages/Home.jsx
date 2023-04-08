import React from "react";
import SideBar from "../component/aside/SideBar";
import MainBlog from "../component/blogs/MainBlog";

const Home = () => {
  return (
    <section className="wrapper">
      <SideBar />
      <MainBlog />
    </section>
  );
};

export default Home;
