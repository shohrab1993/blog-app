import axios from "../../utils/axios";

const getSingleBlogDetails = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};
export default getSingleBlogDetails;
