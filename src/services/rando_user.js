import axios from "axios";

const fetchUser = async () => {
  let baseUrl = "https://api.randomuser.me/";
  let response = await axios.get(baseUrl);
  let data = response.data.results;
  return data;
};

fetchUser();

export default fetchUser;