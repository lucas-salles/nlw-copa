import axios from "axios";

const { BASE_URL } = process.env;

export const api = axios.create({
  baseURL: BASE_URL,
});
