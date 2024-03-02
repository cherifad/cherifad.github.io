/** ./i18n/i18n.config.ts */
import fr from "./locales/fr.json";
import en from "./locales/en.json";
import eduFr from "./locales/education/fr.json";
import eduEn from "./locales/education/en.json";
import projectFr from "./locales/projects/fr.json";
import projectEn from "./locales/projects/en.json";

export default defineI18nConfig(() => ({
  locales: ["en", "fr"],
  locale: "fr",
  strategy: "prefix_except_default",
  defaultLocale: "fr",
  lazy: true,
  fallbackLocale: "fr",
  messages: {
    en: { ...en, ...eduEn, ...projectEn },
    fr: { ...fr, ...eduFr, ...projectFr },
  },
}));
