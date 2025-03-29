import { useDateTranslate } from "@/infrastructure/date/hooks";

jest.mock("@/infrastructure/date/hooks");

export function mockUseDateTranslate(
  props: Partial<ReturnType<typeof useDateTranslate>> = {},
) {
  const implementation: ReturnType<typeof useDateTranslate> = {
    translate: jest.fn(
      (x) => `${x.getDate()}-${x.getMonth()}-${x.getFullYear()}`,
    ),
  };

  jest.mocked(useDateTranslate).mockReturnValue({
    ...implementation,
    ...props,
  });
  return { ...implementation, ...props };
}
