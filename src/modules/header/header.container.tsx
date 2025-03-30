import { useI18n } from "@/infrastructure/i18n";
import { URL_CHAT, URL_HOME } from "@/infrastructure/navigation/constants";

export const HeaderContainer = () => {
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
        <img src="/src/assets/logo.png" alt="logo" className="h-20" />
        <a
          href={URL_HOME}
          className={`
            font-body text-text-link hover:text-text-link-pressed focus:text-text-link-pressed 
            lg:text-body-large md:text-body-medium sm:text-body-small transition-all no-underline
          `}
        >
          ASSURANCE.IA
        </a>
      </div>
      <div className="flex gap-3">
        <a
          href={URL_CHAT}
          className={`
            text-text-link !font-medium lg:text-body-large md:text-body-medium sm:text-body-small 
            no-underline hover:text-text-link-pressed focus:text-text-link-pressed transition-all 
          `}
        >
          {t("chatLink")}
        </a>
      </div>
    </div>
  );
};
