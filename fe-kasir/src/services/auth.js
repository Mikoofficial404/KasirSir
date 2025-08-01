import { useJwt } from "react-jwt";
import { API } from "../api";

export const login = async ({ username, password }) => {
  try {
    const { data } = await API.post("/login", { username, password });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const logout = async ({ token }) => {
  try {
    const { data } = await API.post(
      "/logout",
      { token },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const useDecodeToken = (token) => {
  const { decodeToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token Expired",
        data: null,
      };
    }
    return {
      success: true,
      message: "Token Valid",
      data: decodeToken,
    };
  } catch (e) {
    return {
      success: false,
      message: e.message,
      data: null,
    };
  }
};
