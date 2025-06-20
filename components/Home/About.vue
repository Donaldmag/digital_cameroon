<template>
    <div>
        <div class="rts-service-area three rts-section-gap service__area-3 rts-service-revel-pro">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-area-left-three-large">
                            <!-- <span>RESUME</span> -->
                            <h2 class="title quote text-dark">{{ heading }}</h2>
                            <p class="left-m-para rts-text-anim max-w-720">
                            {{ aboutTxt }}                                
                                <!-- <CommonButtons class="mt--5"
                                    :type="'button'"
                                    :button-text="'En savoir plus'"
                                    :button-link="'about'"
                                    :button-style="'styleSix'"
                                /> -->
                                <button @click="navigateTo('/about-us')" class="learn-more-btn">Find Out More <i
                                    class="fa-solid fa-arrow-up-right"></i></button>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    heading: { type: String, required: false},
    aboutTxt: { type: String, required: false},
});
</script>

<style scoped>
.max-w-720{
    max-width: 720px;
    font-size: 14px;
    line-height: 22px;
}
.rts-section-gap {
    padding: 50px 0;
}
</style>