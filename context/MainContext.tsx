"use client";
import { ContextProps } from "@/interfaces";
import { createContext, ReactNode, useState } from "react";

export const CreateContext = createContext<ContextProps | null>(null);

const MainContext = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleIncrementCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleDecrementCurrentPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <CreateContext.Provider
      value={{
        currentPage,
        handleCurrentPage,
        handleDecrementCurrentPage,
        handleIncrementCurrentPage,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default MainContext;
