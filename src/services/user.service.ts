import axios from "axios";
import authHeader from "./auth-header";
import dotenv from 'dotenv'

const API_URL = `${process.env.REACT_APP_API_URL}/api/test/`;

export const getPublicContent = () => {
  console.log(API_URL+ 'all')
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};