<template>
    <header>
      <nav class="main-nav navbar navbar-expand-lg hover-navbar fixed-top">
        <div class="container d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <router-link :to="{ name: 'home'}" class="navbar-brand color-white fw-bold" href="#">
              <img src="/img/logo-black.png" style="max-height: 4rem;margin-right: 4rem"/>
            </router-link>
            <div>
              <button class="navbar-toggler" style="border: white 1px solid" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars color-white"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link :to="{ name: 'home'}" class="nav-link active" aria-current="page">{{ $t("nav.home") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'about' }" class="nav-link" >{{ $t("nav.about") }}</router-link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
</template>


<script>
import LanguageSwitcher from "@/components/structure/LanguageSwitcher.vue"
import Tr from "@/i18n/translation"
export default {
    name: "NavbarTop",
    components: { LanguageSwitcher },
    setup() {
        return { Tr }
    }
}
</script>


<style scoped>

</style>
