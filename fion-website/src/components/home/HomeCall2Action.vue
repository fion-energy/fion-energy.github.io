<template>
  <div class="section" style="margin-bottom: 10rem; margin-top: 10rem">
    <div class="container" id="ready">
      <div class="">
        <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h1 class="">{{ $t("home.call2action.title") }}</h1>
          <p>{{ $t("home.call2action.content") }}</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 align-self-center justify-content-end d-flex button-container">
            <router-link :to="{ name: 'contact', params: {source: 'call'}}" class="btn btn-light d-flex justify-content-center bg-purple-dark" style="min-width: 60%">{{ $t("button.contact") }}</router-link>
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
