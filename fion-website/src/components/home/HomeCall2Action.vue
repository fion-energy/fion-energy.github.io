<template>
  <div class="section" style="margin-bottom: 10rem; margin-top: 10rem">
    <div class="container text-center" id="ready">
      <div class="row">
        <div class="col">
          <h1 class="cut-word">{{ $t("home.call2action.title") }}</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col text-center">
            <router-link :to="{ name: 'contact'}" class="btn btn-light" style="min-width: 25%">{{ $t("button.contact") }}</router-link>
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