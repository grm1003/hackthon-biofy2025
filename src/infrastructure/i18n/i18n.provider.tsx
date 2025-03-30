import i18n from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";

import { labels as pt } from "./locales/pt";

const setupI18n = (language = "pt") => {
  return i18n.use(initReactI18next).init({
    lng: language,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: pt,
      },
    },
  });
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setupI18n().then(() => {
      setLoaded(true);
    });
  }, []);

  return loaded ? <>{children}</> : null;
};
