<template>
  <div class="section introduction">
    <div class="container p-4">
      <div class="row d-flex justify-content-between">
        <div class="col-lg-5 col-md-12 align-self-center">
          <h1 class="mb-4 "><span class="color-purple-dark">{{ $t("home.introduction.title.purple") }}</span> {{ $t("home.introduction.title.black") }} </h1>
          <p class="mt-5 mb-4 cut-word" >{{ $t("home.introduction.content") }}</p>
        </div>
        <div class="col-lg-5 align-self-center d-flex justify-content-end">
          <img src="/img/software.png" style="width: 100%">
        </div>
      </div>
    </div>
  </div>
  <div class="section introduction">
    <div class="container p-4" >
      <div class="row d-flex justify-content-between">
        <div class="col-lg-5 align-self-center d-flex justify-content-start">
          <img src="/img/challenges.png" style="width: 100%">
        </div>
        <div class="col-lg-5 col-md-12 align-self-center justify-content-end">
          <h1 class="mb-6 ">{{ $t("home.challenges.title.black") }} </h1>
          <p class="mt-5 mb-4 cut-word" >{{ $t("home.challenges.content") }}</p>
        </div>

      </div>
    </div>
  </div>
  <div class="section introduction">
    <div class="container p-4"  >
      <div class="row d-flex  justify-content-between">
        <div class="col-lg-5 col-md-12 align-self-center">
          <h1 class="mb-4 ">{{ $t("home.solution.title.black") }} </h1>
          <p class="mt-5 mb-4 cut-word" >{{ $t("home.solution.content") }}</p>
        </div>
        <div class="col-lg-5 align-self-center d-flex justify-content-end">
          <img src="/img/solution.png" style="width: 100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeIntroduction"
}
</script>

<style scoped>

</style>
