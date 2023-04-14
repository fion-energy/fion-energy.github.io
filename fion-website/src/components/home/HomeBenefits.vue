<template>
  <div class="section" id="smart-grid">
    <div class="container p-4">
      <div class="row">
        <div class="col">
          <h1 class="mb-5">
            {{ $t("home.benefits.title.black") }} <span class="color-purple-dark">{{ $t("home.benefits.title.purple") }}</span>
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-lg-3 col-md-12 text-center">
          <img class="mb-5" src="/img/save-money.png">
          <h2 class="mb-5">
            <span class="color-purple-dark">{{ $t("home.benefits.benefit[0].title.purple") }}</span><br />{{ $t("home.benefits.benefit[0].title.black") }}
          </h2>
          <p>
              {{ $t("home.benefits.benefit[0].content") }}
          </p>
        </div>
        <div class="col-lg-3 col-md-12 text-center">
          <img class="mb-5" src="/img/productivity.png">
          <h2 class="mb-5">
            <span class="color-purple-dark">{{ $t("home.benefits.benefit[1].title.purple") }}</span><br />{{ $t("home.benefits.benefit[1].title.black") }}
          </h2>
          <p>
            {{ $t("home.benefits.benefit[1].content") }}
          </p>
        </div>
        <div class="col-lg-3 col-md-12 text-center">
          <img class="mb-5" src="/img/secure-data.png">
          <h2 class="mb-5">
            <span class="color-purple-dark">{{ $t("home.benefits.benefit[2].title.purple") }}</span><br />{{ $t("home.benefits.benefit[2].title.black") }}
          </h2>
          <p>
            {{ $t("home.benefits.benefit[2].content") }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeBenefits"
}
</script>

<style scoped>

</style>