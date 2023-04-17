<template>
  <div class="section introduction">
    <div class="container p-4" style="min-height: 100vh;" >
      <div class="row d-flex h-100">
        <div class="col-lg-7 col-md-12 align-self-center">
          <h1 class="mb-4 cut-word">{{ $t("home.introduction.title.black") }} <span class="color-purple-dark">{{ $t("home.introduction.title.purple") }}</span></h1>
          <p style="width: 65%;" class="mt-5 mb-4 cut-word" >{{ $t("home.introduction.content") }}</p>
        </div>
        <div class="col-lg-5 d-none d-lg-block align-self-center" style="margin-left: -7rem">
          <img src="/img/header.png" style="width: 40rem;">
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