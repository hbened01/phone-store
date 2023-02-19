import axios from "axios";
import { PREACT_APP_API_URL } from "@/constants/";
console.log(PREACT_APP_API_URL)

const { create } = axios;

const service = create({
  baseURL: PREACT_APP_API_URL,
  timeout: 10000,
});

export default service;
