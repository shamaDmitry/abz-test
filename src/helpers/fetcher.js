import axios from 'axios';
import { API_URL } from "./const.js";

const token = localStorage.getItem('abzToken');

const basicConfig = {
  baseURL: API_URL
}

export const _axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Token": token ? token : null,
    "Content-Type": "application/json"
  }
})

export const fetcher = (path) => {
  return _axios.get(path, {
    ...basicConfig,
  }).then((response) => {
    return response.data;
  });
}
