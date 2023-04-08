import axios from "../../utils/axios";

const increasedLikes = async (data) => {
  const response = await axios.patch(`/blogs/${data.id}`, {
    likes: data.likes,
  });
};

export default increasedLikes;
