<script setup>
import PPANavbarTop from "@/components/structure/PPANavbarTop.vue";
</script>
<template>
  <PPANavbarTop/>

  <div class="mb-5">
    <div class="section introduction ppa">
      <div class="container mt-5">
        <div class="row d-flex justify-content-between">
          <div class="col-lg-5 col-md-6 align-self-center">
            <h1 class="fs-1"> {{ $t("Der einfachste Weg Stromkosten zu sparen") }} </h1>
            <p class="mb-4" >{{ $t("Auf Basis Ihrer Stromdaten Einsparpotentiale in Stromverbrauch und -beschaffung ohne Aufwand erkennen und nutzen") }}</p>
            <div class="align-self-center d-flex button-container">
              <router-link :to="{ name: 'contact', params: {source: 'call'}}" class="btn btn-light d-flex justify-content-center bg-purple-dark" >{{ $t("Jetzt informieren") }}</router-link>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 align-self-center d-flex justify-content-end banner-image">
            <img src="/img/banner.png" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-5 features" style="margin-top: 120px">
    <div class="container mt-5" >
      <div class="row text-center">
        <h1 class="fs-1">Ihre Vorteile</h1>
      </div>
      <div class="row mt-5 ">
        <div class="col-md-4">
          <img src="/img/optimise.png">
          <h2 class="fs-3">Verbrauch optimieren</h2>
          <p>Mit FION erkennen Sie vermeidbaren Stromverbrauch und Kosten</p>
        </div>
        <div class="col-md-4">
          <img src="/img/anpassen.png">
          <h2 class="fs-3">Beschaffung anpassen</h2>
          <p>Passend zu Ihren Verbrauchsdaten ermittelt FION die preiswerteste Beschaffungsstrategie</p>
        </div>
        <div class="col-md-4">
          <img src="/img/co2.png">
          <h2 class="fs-3">CO2 reduzieren</h2>
          <p>Ohne zusätzlichen Aufwand CO2 Einsparung tracken und das Klima schützen</p>
        </div>
      </div>
    </div>
  </div>

  <div class="reviews" style="margin-top: 120px">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1 class="fs-1">
            <img src="/img/quote.png"/>
            Erfolgsgeschichen von unseren Kunden</h1>
        </div>
        </div>
      <img class="testimonials" src="/img/testimonials.png" />
      </div>

  </div>



  <div class="mt-5" >
    <div class="container functions" style="margin-top: 150px">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="fs-1">
            Und so funktioniert es
          </h1>
        </div>
        <div class="col-md-6">
          <div>
            <div class="row align-items-center">
              <div class="col-sm-2">
                <img src="/img/circle.png" />
              </div>
              <div class="col-sm-10">
                <h2>Erstgespräch</h2>
                <p>Wir stellen unseren Service vor und ermitteln gemeinsam Ihre individuellen Bedürfnisse</p>
              </div>
            </div>

          </div>
          <div  class="row align-items-center">
            <div class="col-sm-2">
              <img src="/img/donut.png" />
            </div>
            <div class="col-sm-10">
            <h2>Potenzial ermitteln</h2>
            <p>Auf Basis Ihrer Stromdaten, sprechen wir mit Ihnen Ihre Einsparpotenziale durch</p>
            </div>
          </div>
          <div  class="row align-items-center">
            <div class="col-sm-2">
              <img src="/img/dot.png" />
            </div>
            <div class="col-sm-10">
            <h2>Kosten sparen</h2>
            <p>Gemeinsam beginnen wir die ersten Einsparungen vorzunehmen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="ready" class="" style="margin-top: 150px">
    <div class="container" >
      <div class="">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12">
            <h1 class="fs-1">{{ $t("home.call2action.title") }}</h1>
            <p>{{ $t("home.call2action.content") }}</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 align-self-center justify-content-end d-flex button-container">
            <router-link :to="{ name: 'contact', params: {source: 'call'}}" class="btn btn-light d-flex justify-content-center bg-purple-dark" style="min-width: 60%">{{ $t("Jetzt informieren") }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "ppa"
}
</script>

<style scoped>

</style>
