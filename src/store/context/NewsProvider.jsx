import { createContext, useEffect, useState } from "react";
import newsService from "../services/newsService";

export const newsContext = createContext();

const INITIAL_STATE = { status: "idle", news: [] };
export const NewsContextProvider = ({ children }) => {
  const [data, setData] = useState(INITIAL_STATE);
  useEffect(() => {
    const getNewsData = async () => {
      try {
        setData((prev) => ({ ...prev, status: "loading" }));
        const data = await newsService.getNews();
        setData((prev) => ({ ...prev, status: "success", news: data.results }));
      } catch (error) {
        setData((prev) => ({ ...prev, status: "error" }));
      }
    };

    getNewsData();
  }, []);

  return (
    <newsContext.Provider value={{ data }}>{children}</newsContext.Provider>
  );
};
