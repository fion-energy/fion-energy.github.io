<template>
  <div  id="ready" class="section" style=" margin-top: 10rem">
    <div class="container">
      <div class="">
        <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
          <h2>{{ $t("Wollen Sie FION ausprobieren?") }}</h2>
<!--          <p>{{ $t("home.call2action.content") }}</p>-->
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 align-self-center justify-content-end d-flex button-container">
            <button onclick="window.location.href='https://app.fion-energy.com/'"  class="btn btn-light d-flex justify-content-center bg-purple-dark" style="min-width: 60%">{{ $t("Kostenlos testen!") }}</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeCall2Action"
}
</script>

<style scoped>

</style>
