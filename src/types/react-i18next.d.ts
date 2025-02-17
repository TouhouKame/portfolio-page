import "react-18next";
import en from "../i18n/locales/en.json";

declare module "react-i18next" {
  type TranslationKeys = keyof typeof en;

  interface CustomTypeOptions {
    resources: {
      translation: Record<TranslationKeys, string>;
    };
  }
}
