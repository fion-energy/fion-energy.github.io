<template>

    <div class="section introduction" style="margin-top: 7rem" >
        <div class="container" style="min-height: 100vh;" >
            <div class="row h-100">
                <div class="col-lg-6 col-md-12 align-self-center">
                    <img src="/img/header.png" style="width: 100%;  transform: rotateY(180deg); ">
                    <h2 class="mt-5">
                        {{ $t("contact.message") }}
                    </h2>
                </div>
                <div class="col-lg-6 col-md-12 align-self-center">
                    <h1 class="mb-4">{{ $t("contact.title.black") }} <br /><span class="color-purple-dark">{{ $t("contact.title.purple") }}</span> </h1>
                    <form method="POST" action="https://formspree.io/f/mnqyooje">
                        <input name="name" class="form-control mb-3" type="text"  :placeholder="$t('contact.form.name')" />
                        <input name="email" class="form-control mb-3" type="email" :placeholder="$t('contact.form.email')" />
                        <input name="phone" class="form-control mb-3" type="text" :placeholder="$t('contact.form.phone')" />
                        <textarea name="message" class="form-control mb-3" :placeholder="$t('contact.form.message')" rows="3"></textarea>
                        <div class="w-100" style="text-align: center">
                            <button class="btn bg-purple-dark w-50" type="submit">{{ $t("button.send") }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactView.vue"
}
</script>

<style scoped>

</style>