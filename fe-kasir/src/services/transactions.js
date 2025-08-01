import { API } from "../api";

export const getTransactions = async () => {
  const { data } = await API.get("/transactions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return data.data;
};

export const getTransactionsWithProducts = async () => {
  try {
    const { data } = await API.get("/transactions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createTransactions = async (payload) => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await API.post("/transactions", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal membuat transaksi:", error.response);
    throw error;
  }
};
