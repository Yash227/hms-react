import axios from "axios";

const ROOT_URL = window.location.href.split("/")[2].split(":")[0];
const API_AUTH_URL = `http://${ROOT_URL}:8080/api/auth/`;
const API_TEST_URL = `http://${ROOT_URL}:8080/api/test/`;

const login = (send) => {
  return axios.post(API_AUTH_URL + "signin", send).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = (send) => {
  return axios.post(API_AUTH_URL + "signup", send).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const getHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

const verifyUser = () => {
  return axios
    .get(API_TEST_URL + "user", { headers: getHeader() })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return { data: err.response.data.msg, status: err.response.status };
      } else {
        console.log("hi");
        return { data: "Connection Error", status: -1 };
      }
    });
};

export { login, logout, register, verifyUser };