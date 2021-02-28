import axios from "axios";

let api = axios.create({
  baseURL: "api/",
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "HTTP-X-CSRFTOKEN",
});
export default api;
