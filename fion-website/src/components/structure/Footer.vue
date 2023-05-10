<template>
    <footer id="footer">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6">
            <h4>{{ $t("footer.about_us.title") }}</h4>
            <hr />
<!--            <div>-->
<!--              <p>-->
<!--                  {{ $t("footer.about_us.content") }}-->
<!--              </p>-->
<!--            </div>-->
            <div class="d-flex align-items-center mt-5">
              <div class="me-4">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p>
                  Zugang über den Hof der KPM<br /> Wegelystraße 1<br /> 10623 Berlin
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center mt-5">
              <div class="me-4">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <a href="mailto:hello@fion-energy.com">
                  hello@fion-energy.com
                </a>
              </div>
            </div>
            <div id="icons-link" class="d-flex flex-row justify-content-between mt-5">
              <div>
                <a href="https://www.linkedin.com/company/fion-energy">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/FionEnergy">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div>
                <a href="https://github.com/fion-energy">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <div>
                <a href="mailto:hello@fion-energy.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <h4>{{ $t("footer.links.title") }}</h4>
            <hr />
            <div class="row">
              <div class="col-sm-12">
               <img src="/img/supported-by.png" alt="partners" style="width: 100%"/>
              </div>
              <ul class="list-unstyled before-arrow flex" style="padding-top: 0">
                <li>
                  <router-link :to="{ name: 'privacy-policy'}">
                    {{ $t("footer.links.links[2].title") }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'imprint'}">
                    {{ $t("footer.links.links[3].title") }}
                  </router-link>
                </li>
              </ul>
<!--              <div class="col-sm-6">-->
<!--                <ul class="list-unstyled before-arrow">-->
<!--                </ul>-->
<!--              </div>-->
            </div>
          </div>
<!--          <div class="col-lg-4  col-md-6">-->
<!--            <h4>{{ $t("footer.waiting.title") }}</h4>-->
<!--            <hr />-->
<!--            <div>-->
<!--              <p>-->
<!--                  {{ $t("footer.waiting.message") }}-->
<!--              </p>-->
<!--              <form method="POST" action="https://formspree.io/f/mnqyooje">-->
<!--                  <div class="input-group mb-3">-->
<!--                      <input type="hidden" name="waiting-list" value="Waitinglint">-->
<!--                      <input type="email" name="email" class="form-control" :placeholder="$t('footer.waiting.placeholder')">-->
<!--                      <button type="submit" class="input-group-text bg-purple-dark " id="newslater">{{ $t("footer.waiting.button") }}</button>-->
<!--                  </div>-->
<!--              </form>-->

<!--            </div>-->

<!--          </div>-->
        </div>
        <hr>
        <div class="row">
          <div class="col-12 text-center">
            <p class="d-block my-3">Copyright © <span class="fw-bold">Fion-Energy</span> 2023 | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
  li a:link {
      text-decoration: none;
  }

  li a:visited {
      text-decoration: none;
  }

  li a:hover {
      color: darkgray;
  }
  /*li a:hover {*/
  /*    text-decoration: underline;*/
  /*}*/

  /*li a:active {*/
  /*    text-decoration: underline;*/
  /*}*/
</style>
