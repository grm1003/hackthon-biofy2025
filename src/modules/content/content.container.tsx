import { useI18n } from "@/infrastructure/i18n";

export const ContentContainer = () => {
  const { scopedT } = useI18n();
  const t = scopedT("landpage");

  return (
    <div className="grid grid-cols-2 justify-between items-center h-[calc(100vh-96px)]">
      <div>
        <h1 className="font-title sm:text-title-small md:text-title-medium lg:text-title-large mb-2">
          {t("title")}
        </h1>
        <h2 className="font-subtitle sm:text-subtitle-small md:text-subtitle-medium lg:text-subtitle-large">
          {t("subtitle")}
        </h2>
      </div>
      <div>
        <span>bota um vídeo aqui chefe</span>
      </div>
    </div>
  );
};
