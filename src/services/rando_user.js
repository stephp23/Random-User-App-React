import axios from "axios";

async function FetchUser() {
  const baseUrl = "https://api.randomuser.me/";
  const response = await axios.get(baseUrl);
  const data = response.data.results;
  return data;
  // console.log("Hello World")
};


export default FetchUser;