import axios from "../../utils/axios";

const getRelatedBlogs = async ({ id, tags }) => {
  // ?tags_like=express&tags_like=react&id_ne=1&_limit=2
  let limit = 5;
  let queryStr;
  if (tags?.length > 0) {
    queryStr =
      tags?.map((tag) => `tags_like=${tag}`).join("&") +
      `&id_ne=${id}&_limit=${limit}`;
  } else {
    queryStr = `id_ne=${id}&_limit=${limit}`;
  }
  const response = await axios.get(`/blogs?${queryStr}`);
  return response.data;
};

export default getRelatedBlogs;
