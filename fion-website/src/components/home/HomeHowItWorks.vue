<template>
  <div class="section mt-5" id="how-it-works">
    <div class="container p-4">
      <div class="row mb-4">
        <div class="col">
          <h1 class="">{{ $t("home.how_it_works.title") }} </h1>
        </div>
      </div>

        <div class="d-flex">
          <div class="row mt-4">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-4">
            <h2 class="color-purple-dark">{{1}}</h2>
            <div>
              <strong>{{ $t("home.how_it_works.items[0].title") }}</strong>
              <p>{{$t("home.how_it_works.items[0].content")}}</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-4">
            <h2 class="color-purple-dark">{{2}}</h2>
            <div>
              <strong>{{ $t("home.how_it_works.items[1].title") }}</strong>
              <p>{{$t("home.how_it_works.items[1].content")}}</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-4">
            <h2 class="color-purple-dark">{{3}}</h2>
            <div>
              <strong>{{ $t("home.how_it_works.items[2].title") }}</strong>
              <p>{{$t("home.how_it_works.items[2].content")}}</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-4">
            <h2 class="color-purple-dark">{{4}}</h2>
            <div>
              <strong>{{ $t("home.how_it_works.items[3].title") }}</strong>
              <p>{{$t("home.how_it_works.items[3].content")}}</p>
            </div>
          </div>

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
