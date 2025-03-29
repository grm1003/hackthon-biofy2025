export const getEnv = (key: keyof ImportMeta["env"], defaultValue?: string) => {
  return import.meta.env[key] || defaultValue;
};
