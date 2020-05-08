import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
    baseURL: "https://total-top-5s.herokuapp.com/",
  });
};
export default axiosWithAuth;
