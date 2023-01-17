import React, { useMemo, useState } from "react";

export interface ILanguage {
  language: boolean;
  changeLanguage: (type: boolean) => void;
}

export const LanguageContext = React.createContext<ILanguage>({
  language: false,
  changeLanguage: () => {},
});

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  initialState: boolean;
}

export default function ChangeLanguageProvider({ children, initialState }: IProps) {
  const [language, setLanguage] = useState(initialState);
  const changeLanguage = () => {
    setLanguage(!language);
  };

  const currentLanguage = useMemo(() => {
    return {
      language,
      changeLanguage,
    };
  }, [language]);

  return <LanguageContext.Provider value={currentLanguage}>{children}</LanguageContext.Provider>;
}

export const LanguageConsumer = LanguageContext.Consumer;
