import i18n from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";

import { labels as en } from "./locales/en";

const setupI18n = (language = "en") => {
  return i18n.use(initReactI18next).init({
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
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
