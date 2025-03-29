import { useNavigation } from "@/infrastructure/navigation/use-navigation";

jest.mock("@/infrastructure/navigation/use-navigation");

export function mockUseNavigation(
  props: Partial<ReturnType<typeof useNavigation>> = {},
) {
  const implementation: ReturnType<typeof useNavigation> = {
    navigate: jest.fn(),
  };

  jest.mocked(useNavigation).mockReturnValue({
    ...implementation,
    ...props,
  });

  return { ...implementation, ...props };
}
