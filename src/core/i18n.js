import VueI18n from "vue-i18n";

import en from "@/locales/en.json";
import ja from "@/locales/ja.json";

const messages = {
  en,
  ja,
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "ja",
  messages,
  modifiers: {
    list(value) {
      if (Array.isArray(value)) {
        const lastItem = value.pop();
        return value.length > 0 ? `${value.join(", ")} and ${lastItem}` : lastItem;
      }
      return value;
    }
  }
});

if (module.hot) {
  module.hot.accept(["@/locales/en.json", "@/locales/ja.json"], () => {
    i18n.setLocaleMessage("en", require("@/locales/en.json"));
    i18n.setLocaleMessage("ja", require("@/locales/ja.json"));
  });
}

export { i18n };
