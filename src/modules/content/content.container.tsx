import { useI18n } from "@/infrastructure/i18n";
import { useNavigation } from "@/infrastructure/navigation";
import { URL_CHAT } from "@/infrastructure/navigation/constants";

export const ContentContainer = () => {
  const { scopedT } = useI18n();
  const { navigate } = useNavigation();

  const t = scopedT("landpage");

  return (
    <div className="grid grid-cols-2 gap-6 justify-between items-center h-[calc(100vh-96px)] px-8">
      <div>
        <h1 className="font-title text-text sm:text-title-small md:text-title-medium lg:text-title-large mb-12">
          {t("title")}
        </h1>
        <h2
          className={`
            font-subtitle text-justify text-text sm:text-subtitle-small md:text-subtitle-medium 
            lg:text-subtitle-large mb-6
          `}
        >
          {t("subtitle")}
        </h2>
        <button
          className={`
            bg-button text-text-inverse p-3 rounded-full hover:bg-button-hover 
            sm:text-body-small md:text-body-medium lg:text-body-large !font-medium
            cursor-pointer transition-all border-none focus:outline-[rgb(137,180,250,0.5)]
          `}
          onClick={() => navigate(URL_CHAT)}
        >
          {t("callToAction")}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <video className="w-full h-full" autoPlay src="/video.webm" />
      </div>
    </div>
  );
};
