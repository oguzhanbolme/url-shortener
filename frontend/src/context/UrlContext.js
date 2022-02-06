import React, { createContext, useState, useEffect, useContext } from "react";
import { getUrls } from "../api/UrlApi";

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls().then((data) => {
      setUrls(data);
    });
  }, []);

  const contextValue = {
    urls: urls,
    setUrls: setUrls,
  };

  return (
    <UrlContext.Provider value={contextValue}>{children}</UrlContext.Provider>
  );
}

export const useUrlContext = () => useContext(UrlContext);
