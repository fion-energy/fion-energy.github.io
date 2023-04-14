<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ t(`locale.${locale}`) }}
        </a>
        <ul class="dropdown-menu">
            <li v-for="sLocale in supportedLocales" class="w-100 pe-0">
                <a class="dropdown-item color-purple-dark" @click="switchLanguage" :value="sLocale">{{ t(`locale.${sLocale}`) }}</a>
            </li>
        </ul>
    </li>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router"
import Tr from "@/i18n/translation"
export default {
    setup() {
        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales
        const router = useRouter()
        const switchLanguage = async (event) => {
            const newLocale = event.target.attributes['value'].value
            await Tr.switchLanguage(newLocale)
            try {
                await router.replace({ params: { locale: newLocale } })
            } catch(e) {
                console.log(e)
                router.push("/")
            }
        }
        return { t, locale, supportedLocales, switchLanguage }
    }
}
</script>