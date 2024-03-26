<template>
    <footer id="footer">
      <div class="container p-4">
        <div class="row mt-5">
          <div class="col-lg-4 col-md-4">
            <div>
              <img src="/img/logo.png" class="h-logo" style="max-height: 3rem;"/>
            </div>
            <div class="d-flex align-items-center mt-2">
              <div>
                <p>
                  <br/>
                  c/o Future Energy Lab
                  Wegelystraße 1, 10623 Berlin
                  <br/>
                  hello@fion-energy.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <ul class="list-unstyled flex" style="padding: 0">
              <li>
                <router-link :to="{ name: 'privacy-policy'}">
                  <strong>{{ $t("footer.links.links[2].title") }}</strong>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'imprint'}">
                  <strong>{{ $t("footer.links.links[3].title") }}</strong>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-5 col-md-4">
            <img src="/img/supported-by.png" class=" align-items-end" alt="partners" style="width: 70%; float: right"/>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12">
            <p class="d-block my-3 copyright">Copyright © <span class="fw-bold">Fion-Energy</span> 2023 | All rights reserved.</p>
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
