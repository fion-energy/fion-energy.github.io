<template>
  <PPANavbarTop/>
  <div class="section introduction contact-view" style="margin-top: 120px">
    <div class="container" style="min-height: 100vh;">
      <div class="row">
        <h2 class="">{{ $t("Wir freuen uns, dass Sie FION testen möchten.") }} </h2>
        <p>Wir benachrichtigen Sie, sobald unsere Software für Sie bereit ist.</p>

        <div class="col-lg-6 col-md-12 align-self-center justify-content-center d-flex">
          <div>
            <img src="/img/contact.png" style="width: 100%;">
          </div>
        </div>


        <div class="col-lg-6 col-md-12 align-self-center mt-5">
          <form method="POST" action="https://formspree.io/f/mnqyooje">
            <input name="from" type="hidden" :value="$route.params.source">
            <label>{{$t('contact.form.first_name')}}</label>
            <input name="first_name" class="form-control mb-3" type="text" />
            <label>{{$t('contact.form.last_name')}}</label>
            <input name="last_name" class="form-control mb-3" type="text"/>
            <label>{{$t('contact.form.email')}}</label>
            <input name="email" class="form-control mb-3" type="email"/>
            <label>{{$t('contact.form.message')}} (optional)</label>
            <textarea name="message" class="form-control mb-3"
                      rows="3"></textarea>
            <div class="w-100 mt-5">
              <button class="btn bg-purple-dark w-50" type="submit">{{ $t("button.send") }}</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PPANavbarTop from "@/components/structure/PPANavbarTop.vue";

export default {
  name: "ContactView.vue",
  components: {PPANavbarTop}
}
</script>

<style scoped>

</style>
