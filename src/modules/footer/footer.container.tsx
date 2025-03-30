import { useI18n } from "@/infrastructure/i18n";

export const FooterContainer = () => {
  const { scopedT } = useI18n();
  const t = scopedT("landpage");

  return (
    <footer className="w-full bg-background text-text h-12 flex items-center justify-center">
      <p className="text-sm">
        © {new Date().getFullYear()} {t("copyright")}
      </p>
    </footer>
  );
};
