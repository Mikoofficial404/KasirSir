import { API } from "../api";

export const getProducts = async () => {
  const { data } = await API.get("/products");
  return data.data;
};

export const createProducts = async (data) => {
  try {
    const response = await API.post("/products", data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const showProducts = async (id) => {
  try {
    const { data } = await API.get(`/products/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateProducts = async (id, data) => {
  try {
    const response = await API.post(`/products/${id}`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteProduct = async (id) => {
  try {
    await API.delete(`/products/${id}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
