<script setup>
import PPANavbarTop from "@/components/structure/PPANavbarTop.vue";
import HomeCall2Action from "@/components/home/HomeCall2Action.vue";
import HomeAccordian from "@/components/home/HomeAccordian.vue";
</script>
<template>
  <PPANavbarTop/>

  <div class="mb-5">
    <div class="section introduction ppa">
      <div class="container mt-5">
        <div class="row d-flex justify-content-between">
          <div class="col-lg-5 col-md-6 align-self-center">
            <h1 class="fs-1"> {{ $t("Zeit sparen und Potentiale besser erkennen") }} </h1>
            <p class="mb-4" >{{ $t("Mit FION, der ersten KI-gestützten Lastganganalysesoftware für Energieberater") }}</p>
            <div class="align-self-center d-flex button-container mt-5">
              <button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/johannes-fion/30min'});return false;" class="btn btn-light d-flex justify-content-center bg-purple-dark" >{{ $t("Erstgespräch vereinbaren") }}</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 align-self-center d-flex justify-content-end banner-image">
            <img src="/img/banner-v2.png" style="width: 100%">
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
          <img src="/img/clock.png">
          <h2 class="fs-3">Zeit sparen</h2>
          <p>Mit FION schnell und einfach zu guten Analyseergebnissen kommen, ohne tiefgehende Excel Kenntnisse</p>
        </div>
        <div class="col-md-4">
          <img src="/img/chart.png">
          <h2 class="fs-3">Besser analysieren</h2>
          <p>Mit FION Potentiale im Lastgang erkennen, die ansonsten übersehen werden</p>
        </div>
        <div class="col-md-4">
          <img src="/img/star.png">
          <h2 class="fs-3">Kunden überzeugen</h2>
          <p>OMit FION Potentiale verständlich visualisiert präsentieren und Folgeaufträge sichern</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5" >
    <div class="container functions-analysis" style="margin-top: 150px">
      <h2 class="text-center">Entdecken Sie Analyse Funktionen</h2>
      <div class="row">
        <div class="col-md-4">
          <div>
          <h3>Mehrere Lastgänge hochladen</h3>
          <p>Mehrere Lastgänge pro Kunde hochladen und mit einfacher Navigation visualisieren</p>
            <img src="/img/table.png" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
          <h3>Lastgänge vergleichen</h3>
          <p>Charts von verschiedenen Lastgangdaten übereinander- legen und vergleichen</p>
            <img src="/img/table.png" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
          <h3>Merkmale dokumentieren</h3>
          <p>Relevante Beobachtungen direkt in dem visualierten Chart festhalten</p>
            <img src="/img/table.png" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
          <h3>Interaktiv in Charts navigieren</h3>
          <p>Verschiedene Charttypen für verschiedene Zeiträume intuitiv darstellen lassen</p>
            <img src="/img/table.png" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
          <h3>KI Beobachtungen überprüfen</h3>
          <p>Von FIONs künstlicher Intelligenz relevante Hinweise bekommen und erweitern</p>
            <img src="/img/table.png" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
          <h3>Report & Charts  exportieren</h3>
          <p>Die Analysearbeit in einen professionellen Report exportieren</p>
            <img src="/img/table.png" />
          </div>
        </div>
      </div>
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
                <h2>Erstgespräch vereinbaren</h2>
                <p>Wir stellen unseren Service vor und ermitteln gemeinsam Ihre individuellen Bedürfnisse</p>
              </div>
            </div>

          </div>
          <div  class="row align-items-center">
            <div class="col-sm-2">
              <img src="/img/donut.png" />
            </div>
            <div class="col-sm-10">
            <h2>Warteliste beitreten</h2>
            <p>Melden Sie sich mit Ihrer Email Adresse bei uns an, um Beta Tester zu werden</p>
            </div>
          </div>
          <div  class="row align-items-center">
            <div class="col-sm-2">
              <img src="/img/dot.png" />
            </div>
            <div class="col-sm-10">
            <h2>Testzeitraum beginnen</h2>
            <p>Wir benachrichtigen Sie, wenn FION online ist, damit Sie anfangen können zu testen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <HomeCall2Action />
  <div class="mt-5" >
    <div class="container functions" style="margin-top: 150px">
      <h2>FAQ</h2>
      <HomeAccordian />
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
