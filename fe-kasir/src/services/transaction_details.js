import { API } from "../api";

export const getTransactionHistory = async () => {
  const { data } = await API.get("/transactionshistory", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return data.data;
};

export const downloadPdf = async () => {
  const response = await fetch("http://localhost:8000/api/exportpdf", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Accept: "application/pdf",
    },
  });
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sales_report.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
