<template>
  <div class="section" id="use-cases">
    <div class="container p-4">
      <div class="row mb-4">
        <div class="col">
          <h1>{{ $t("home.use_cases.title.black") }} <span class="color-purple-dark">{{ $t("home.use_cases.title.purple") }}</span> </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-evenly my-4">
        <div class="col-lg-6 col-md-12 order-lg-2 align-self-center text-center">
          <img src="/img/smart-meter.png">
        </div>
        <div class="col-lg-6 col-md-12 order-lg-1 align-self-center">
          <h2 class="mb-4">
            <span class="color-purple-dark">{{ $t("home.use_cases.case[0].title.purple") }}</span> {{ $t("home.use_cases.case[0].title.black") }}
          </h2>
          <p class="my-4">
              {{ $t("home.use_cases.case[0].content") }}
          </p>
          <router-link :to="{ name: 'contact'}" class="btn bg-purple-dark">{{ $t("button.info") }}</router-link>
        </div>
      </div>
      <div class="row d-flex justify-content-evenly mb-5">
        <div class="col-lg-6 col-md-12 order-lg-1 align-self-center  text-center">
          <img src="/img/internet-of-things.png">
        </div>
        <div class="col-lg-6 col-md-12 order-lg-2 align-self-center">
          <h2 class="mb-4">
              <span class="color-purple-dark">{{ $t("home.use_cases.case[1].title.purple") }}</span> {{ $t("home.use_cases.case[1].title.black") }}
          </h2>
          <p class="my-4">
              {{ $t("home.use_cases.case[1].content") }}
          </p>
          <router-link :to="{ name: 'contact'}" class="btn bg-purple-dark">{{ $t("button.info") }}</router-link>
        </div>
      </div>

      <div class="row d-flex justify-content-evenly mt-5">
        <div class="col-lg-6 col-md-12 order-lg-2 align-self-center text-center">
          <img src="/img/energy.png">
        </div>
        <div class="col-lg-6 col-md-12 order-lg-1 align-self-center">
          <h2 class="mb-4">
              <span class="color-purple-dark">{{ $t("home.use_cases.case[2].title.purple") }}</span> {{ $t("home.use_cases.case[2].title.black") }}
          </h2>
          <p class="my-4">
              {{ $t("home.use_cases.case[2].content") }}
          </p>
          <router-link :to="{ name: 'contact'}" class="btn bg-purple-dark">{{ $t("button.info") }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeUseCases"
}
</script>

<style scoped>

</style>