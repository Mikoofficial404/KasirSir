import { API } from "../api/index";

export const getUsers = async () => {
  const response = await API.get("/users");
  return response.data;
};
