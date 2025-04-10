import { render, waitFor } from "@testing-library/react";
import i18n from "i18next";

import { I18nProvider } from "../i18n.provider";
import { labels as enLabels } from "../locales/en";

jest.mock("i18next");

describe("I18nProvider", () => {
  const init = jest.fn().mockResolvedValue(null);
  const use = jest.fn().mockImplementation(() => ({ init }));

  beforeEach(() => {
    jest.spyOn(i18n, "use").mockImplementation(use);
  });

  it("should call init when setting up provider", async () => {
    render(
      <I18nProvider>
        <div data-testid="children" />
      </I18nProvider>,
    );

    await waitFor(async () => {
      expect(init).toHaveBeenCalledWith(
        expect.objectContaining({
          lng: "en",
          fallbackLng: "en",
          interpolation: {
            escapeValue: false,
          },
          resources: {
            en: {
              translation: enLabels,
            },
          },
        }),
      );
    });
  });
});
