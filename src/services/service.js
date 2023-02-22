import axios from "axios";
import { PREACT_APP_API_URL } from "@/constants/";

const { create } = axios;

const url  = PREACT_APP_API_URL ?? "https://itx-frontend-test.onrender.com";

const service = create({
  baseURL: url,
});

export default service;
