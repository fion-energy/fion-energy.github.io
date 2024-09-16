<template>
  <header>
    <nav class="main-nav navbar navbar-expand-lg hover-navbar fixed-top">
      <div class="container d-flex justify-content-between">
        <div class="d-flex">
          <router-link :to="{ name: 'ppa'}" class="navbar-brand color-white fw-bold" href="#">
            <img src="/img/logo-black.png" class="h-logo" style="max-height: 2rem;margin-right: 2rem"/>
          </router-link>
          <div class="menu-group">
            <button class="navbar-toggler " style="border: white 1px solid" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link :to="{ name: 'home'}" class="nav-link">{{ $t("Startseite") }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'about' }" class="nav-link" >{{ $t("Über uns") }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button onclick="window.location.href='https://app.fion-energy.com/'"  class="calendly-btn btn btn-light justify-content-center bg-purple-dark">{{ $t("Kostenlos testen!") }}</button>
      </div>
    </nav>
  </header>
</template>


<script>
import Tr from "@/i18n/translation"
export default {
  name: "PPANavbarTop",
  components: {  },
  setup() {
    return { Tr }
  }
}
</script>


<style scoped>

</style>
