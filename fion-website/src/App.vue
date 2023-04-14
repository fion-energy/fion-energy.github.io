<script>
import { RouterLink, RouterView } from 'vue-router'
import LanguageSwitcher from './components/structure/LanguageSwitcher.vue'
import NavbarTop from "@/components/structure/NavbarTop.vue";
import Footer from "@/components/structure/Footer.vue";
import HomeView from "@/views/HomeView.vue";

export default {
    components: {HomeView, Footer, NavbarTop, LanguageSwitcher }
}
</script>

<template>
  <NavbarTop />
  <main id="content" role="main">
      <RouterView />
  </main>
  <Footer />
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
<!--    <LanguageSwitcher></LanguageSwitcher>-->
<!--    <h1>{{ $t("home.header") }}</h1>-->
<!--    <p>{{ $t("home.created_by") }}</p>-->
<!--  <RouterView />-->

</template>

<style scoped>

</style>
