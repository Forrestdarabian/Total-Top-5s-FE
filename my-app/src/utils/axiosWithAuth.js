import axios from "axios";

const isTesting = false;

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
    baseURL: isTesting
      ? "http://localhost:5000/"
      : "https://total-top-5s.herokuapp.com/",
  });
};
export default axiosWithAuth;
