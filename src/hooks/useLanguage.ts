import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

export default () => {
  const context = useContext(LanguageContext);
  return context;
};
