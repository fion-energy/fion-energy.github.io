<template>
  <div class="section mt-5" id="smart-grid">
    <div class="container p-4">
      <div class="row">
        <div class="col">
          <h1 class="mb-5">
            {{ $t("home.advantages.title") }}
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/integration.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[0].title") }}</span>
          </h2>
          <p>
              {{ $t("home.advantages.items[0].content") }}
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/regulation.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[1].title") }}</span>
          </h2>
          <p>
            {{ $t("home.advantages.items[1].content") }}
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/automation.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[2].title") }}</span>
          </h2>
          <p>
            {{ $t("home.advantages.items[2].content") }}
          </p>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/protection.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[3].title") }}</span>
          </h2>
          <p>
            {{ $t("home.advantages.items[3].content") }}
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/regulation.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[4].title") }}</span>
          </h2>
          <p>
            {{ $t("home.advantages.items[4].content") }}
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 p-3">
          <img class="mb-5" src="/img/ai.png">
          <h2 class="">
            <span class="">{{ $t("home.advantages.items[5].title") }}</span>
          </h2>
          <p>
            {{ $t("home.advantages.items[5].content") }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Homeadvantages"
}
</script>

<style scoped>

</style>
