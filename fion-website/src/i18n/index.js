import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import es from "./locales/es.json"
import de from "./locales/de.json"


export default createI18n({
    locale: 'de',
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {
        de,
        en,
        es
    }
})
