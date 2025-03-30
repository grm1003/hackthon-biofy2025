export const HeaderContainer = () => {
  return (
    <div className=" dark:bg-black h-12 w-full border-b border-0 border-gray-200 border-solid flex items-center justify-between px-6 mb-8">
      <div>
        <img src="/src/assets/logo.png" alt="logo" className="h-8" />
        <span className="font-body text-white lg:text-body-large md:text-body-medium sm:text-body-small">
          ASSURANCE.IA
        </span>
      </div>
    </div>
  );
};
