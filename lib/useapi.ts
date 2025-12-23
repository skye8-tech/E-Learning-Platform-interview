import axios from "axios";

const BASE_URL = "/https://elearning.skye8.tech/api";

export const getCourses = async () => {
  const response = await axios.get(`${BASE_URL}/courses`);
  return response.data;
}