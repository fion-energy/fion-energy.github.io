<template>
    <div class="section" id="about-us" style="margin-top: 7.50rem;">
        <div class="container p-4">
            <div class="row">
                <div class="col text-center">
                    <h1 class="cut-word">{{ $t("about.title.black") }} <span class="color-purple-dark">{{ $t("about.title.purple") }}</span> </h1>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <hr class="color-purple-dark">
                    <h2 class="cut-word color-black fw-bolder">{{ $t("about.message.first_line") }}</h2>
                    <h2 class="color-purple-dark cut-word fw-bold">{{ $t("about.message.second_line") }}</h2>
                    <hr class="color-purple-dark">
                </div>
            </div>
            <br>
            <br>
            <div class="row" style="margin-bottom: -8rem">
                <div class="col">
                    <p v-for="(item, index) in $tm('about.paragraph')">
                        {{ $rt(item) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <HomeCall2Action />
</template>

<script>
import HomeCall2Action from "@/components/home/HomeCall2Action.vue";

export default {
    name: "AboutUs.vue",
    components: {HomeCall2Action}
}
</script>

<style scoped>

</style>