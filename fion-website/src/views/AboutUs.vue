
<template>
  <PPANavbarTop/>
    <div class="section" id="about-us" style="margin-top: 7.50rem;">
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                  <h1 class="">{{ $t("about.title") }} </h1>
                  <p>{{ $t("about.excerpt") }}</p>
                </div>
            </div>

          <div class="section mt-5">
            <div class="container">
              <div class="row d-flex justify-content-between">
                <div class="col-lg-5 col-md-12 align-self-center">
                  <p class="mt-5 mb-4 cut-word" v-html="$t('about.founder')"></p>
                </div>
                <div class="col-lg-5 align-self-center d-flex justify-content-center">
                  <img src="/img/about-us.jpg" style="width: 100%">
                </div>
              </div>
            </div>
          </div>
          <div class="section introduction">
            <div class="container" >
              <div class="row d-flex justify-content-between ">
                <div class="col-lg-5 align-self-center justify-content-start">
                  <img src="/img/problem.png" style="width: 100%">
<!--                  <strong>"{{$t("about.statement")}}"</strong>-->
<!--                  <br/>-->
<!--                  <p class="mt-5">{{$t("about.by")}}</p>-->
                </div>
                <div class="col-lg-5 col-md-12 align-self-center justify-content-end">
                  <p class="mt-5 mb-4 cut-word" >{{ $t("about.discussion") }}</p>
                </div>

              </div>
            </div>
          </div>
<!--          <div class="section introduction">-->
<!--            <div class="container"  >-->
<!--              <div class="row d-flex  justify-content-between">-->
<!--                <div class="col-lg-5 col-md-12 align-self-center">-->
<!--                  <p class="mt-5 mb-4 cut-word" >{{ $t("about.problem") }}</p>-->
<!--                </div>-->
<!--                <div class="col-lg-5 align-self-center d-flex justify-content-end">-->
<!--                  -->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div class="mt-5 mb-5 pt-5 pb-5">
            <h2>{{ $t("about.footnote") }}</h2>
          </div>
        </div>
    </div>
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
