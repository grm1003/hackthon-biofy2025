import { useTranslation } from "react-i18next";

// Use this wrapper hook to translate instead of using the useTranslation/useI18next hooks directly
// If we need to change the i18n library, we only need to change this file
export const useI18n = () => {
  const { t: translate } = useTranslation();

  const t = (path: string, bindings?: Record<string, any>) =>
    translate(path, bindings);

  const scopedT =
    (scope: string) => (path: string, bindings?: Record<string, any>) =>
      t(`${scope}.${path}`, bindings);

  return { t, scopedT };
};
