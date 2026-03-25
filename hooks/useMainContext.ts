import { CreateContext } from "@/context/MainContext";
import { useContext } from "react";

const useMainContext = () => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error("Forgot to wrap children componeht with provider");
  }
  return context;
};

export default useMainContext;
