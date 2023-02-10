import axios from "axios";
import dotenv from 'dotenv'


const API_URL = `${process.env.REACT_APP_API_URL}/api/auth/`;

export const register = (email: string, password: string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};