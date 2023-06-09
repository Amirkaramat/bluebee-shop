import React, { useState, useEffect, useCallback } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/AuthContext";
import "./App.css";

export default function App() {
  const router = useRoutes(routes);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserInfos(null);
    setIsLoggedIn(false)
    localStorage.removeItem("user");
  }, []);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setToken(localStorageData.token);
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userInfos, login, logout }}>
      {router}
    </AuthContext.Provider>
  );
}
