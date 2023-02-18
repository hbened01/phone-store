import axios from "axios";

const { create } = axios;

const service = create({
  baseURL: "https://itx-frontend-test.onrender.com",
  timeout: 10000,
});

export default service;
