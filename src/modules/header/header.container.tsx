import { useI18n } from "@/infrastructure/i18n";
import { useNavigation } from "@/infrastructure/navigation";
import { URL_CHAT, URL_HOME } from "@/infrastructure/navigation/constants";

export const HeaderContainer = () => {
  const { navigate } = useNavigation();
  const { scopedT } = useI18n();
  const t = scopedT("landpage");

  return (
    <div
      className={`
        bg-background h-12 w-full border-b border-0 border-background-border
        border-solid flex items-center justify-between px-6
      `}
    >
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="h-16" />
        <button
          onClick={() => navigate(URL_HOME)}
          className={`
            font-body text-text-link hover:text-text-link-pressed focus:text-text-link-pressed 
            lg:text-body-large md:text-body-medium sm:text-body-small transition-all border-none
            bg-transparent cursor-pointer p-0 !font-bold
          `}
        >
          ASSURANCE.AI
        </button>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => navigate(URL_CHAT)}
          className={`
            text-text-link !font-medium lg:text-body-large md:text-body-medium sm:text-body-small 
            no-underline hover:text-text-link-pressed focus:text-text-link-pressed transition-all 
            bg-transparent border-none cursor-pointer p-0
          `}
        >
          {t("chatLink")}
        </button>
      </div>
    </div>
  );
};
