import axios from "axios";

export const insertUser = (a) => {
  const res = axios.post("/api/users", a);
  return res;
};

export const loginUser = (a) => {
  const res = axios.get("/api/users/login", { params: a });
  return res;
};
