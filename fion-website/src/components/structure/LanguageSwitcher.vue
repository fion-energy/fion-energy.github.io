<template>
  <div class="nav-item">
    <ul class="navbar-nav">
      <li v-for="sLocale in supportedLocales" class="w-100 pe-0 nav-item">
        <a :href="'/' + sLocale " class="color-black fw-bold locale" :class="{'active': currentLocale === sLocale}" role="button"
           @click="switchLanguage" :value="sLocale">{{ t(`locale.${sLocale}`) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n'
import {useRouter, useRoute} from "vue-router"
import Tr from "@/i18n/translation"

export default {
  setup() {
    const {t, locale} = useI18n()
    const supportedLocales = Tr.supportedLocales
    const router = useRouter();
    let currentLocale = location.pathname.replace('/', '') || 'de';
    const switchLanguage = async (event) => {
      const newLocale = event.target.attributes['value'].value
      await Tr.switchLanguage(newLocale)
      try {
        await router.replace({params: {locale: newLocale}})
        currentLocale = newLocale;
      } catch (e) {
        console.log(e)
        router.push("/")
      }
    }
    return {t, locale, supportedLocales, switchLanguage, currentLocale}
  }
}
</script>
