import axios from "../../utils/axios";

const updateSave = async (data) => {
  const response = await axios.patch(`/blogs/${data.id}`, {
    isSaved: data.isSaved,
  });
};

export default updateSave;
