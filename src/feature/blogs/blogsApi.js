import axios from "../../utils/axios";

const getBlogs = async (sort) => {
  //blogs?_sort=likes&_order=desc
  let url;

  if (sort === "newest") {
    url = `/blogs?_sort=createdAt&_order=desc`;
  } else if (sort === "most_liked") {
    url = `/blogs?_sort=likes&_order=desc`;
  } else {
    url = "/blogs";
  }

  const response = await axios.get(url);
  return response.data;
};

export default getBlogs;
