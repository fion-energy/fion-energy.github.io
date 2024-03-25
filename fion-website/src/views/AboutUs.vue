
<template>
  <PPANavbarTop/>
    <div class="section" id="about-us" style="margin-top: 7.50rem;">
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-12 p-4 align-self-center">
                  <h1 class="text-center">{{ $t("Unsere Geschichte") }} </h1>
                  <p class="text-center">{{ $t("Unsere Überzegungen und warum wir FION aufbauen") }}</p>
                </div>
            </div>

          <div class="section mt-5">
            <div class="container">
              <div class="row d-flex justify-content-between">
                <div class="col-lg-5 col-md-12 align-self-center">
                  <h2>Unsere Mission</h2>
                  <p class="mt-5 mb-4 cut-word">
                    Wir sind ein junges Unternehmen mit einer klaren Mission: Energieberatern und ihren Kunden dabei zu helfen, die richtigen Entscheidungen in Richtung einer kosteneffizienten und nachhaltigen Energiezukunft zu treffen.
                  </p>
                </div>
                <div class="col-lg-5 align-self-center d-flex justify-content-center">
                  <img src="/img/mission.png" style="width: 100%">
                </div>
              </div>
            </div>
          </div>
          <div class="section introduction">
            <div class="container" >
              <div class="row d-flex justify-content-between ">
                <div class="col-lg-5 align-self-center justify-content-start">
                  <img src="/img/analysis.png" style="width: 100%">
<!--                  <strong>"{{$t("about.statement")}}"</strong>-->
<!--                  <br/>-->
<!--                  <p class="mt-5">{{$t("about.by")}}</p>-->
                </div>
                <div class="col-lg-5 col-md-12 align-self-center justify-content-end">
                  <h2>Lastgangdaten</h2>
                  <p class="mt-5 mb-4 cut-word" >
                    In einer Zeit, in der die Notwendigkeit der Energiewende immer drängender wird, erkennen wir das Potenzial, das in vorhandenen Lastgangdaten schlummert. Diese Daten sind nicht nur Zahlen und Grafiken, sondern vielmehr wertvolle Einblicke in den Energieverbrauch und die Effizienz eines Unternehmens. Doch bisher blieb ihr volles Potenzial weitgehend ungenutzt.
                  </p>
                </div>


              </div>
            </div>
          </div>
          <div class="section introduction">
            <div class="container"  >
              <div class="row d-flex  justify-content-between">
                <div class="col-lg-5 col-md-12 align-self-center">
                  <h2>Analyse mit KI</h2>
                  <p class="mt-5 mb-4 cut-word" >
                    Wir setzen auf innovative Technologien und fortschrittliche Analysemethoden, die von künstlicher Intelligenz unterstützt werden, um diese Daten zu verstehen, zu interpretieren und in handlungsorientierte Erkenntnisse umzuwandeln. Unsere Lösungen bieten Energieberatern und ihren Kunden die Möglichkeit, fundierte Entscheidungen zu treffen, die nicht nur Energie- und Kosteneffizienz von Unternehmen verbessern, sondern auch einen positiven Beitrag zur Energiewende leisten.
                  </p>
                </div>
                <div class="col-lg-5 align-self-center d-flex justify-content-end">
                  <img src="/img/analyse.png" style="width: 100%">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  <HomeCall2Action />
</template>

<script>
import HomeCall2Action from "@/components/home/HomeCall2Action.vue";
import PPANavbarTop from "@/components/structure/PPANavbarTop.vue";

export default {
    name: "AboutUs.vue",
    components: {PPANavbarTop, HomeCall2Action}
}
</script>

<style scoped>

</style>
