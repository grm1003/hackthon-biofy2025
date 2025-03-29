type Translate = {
  short: boolean;
  hours: boolean;
  month: "numeric" | "2-digit" | "short" | "long" | "narrow";
};

export function useDateTranslate() {
  function translate(
    value: Date,
    { short, hours, month }: Partial<Translate> = {},
  ) {
    return new Intl.DateTimeFormat("en", {
      month: month ?? (short ? "numeric" : "short"),
      day: "numeric",
      year: short ? "2-digit" : "numeric",
      hour: hours ? "numeric" : undefined,
      minute: hours ? "numeric" : undefined,
    }).format(value);
  }

  return {
    translate,
  };
}
