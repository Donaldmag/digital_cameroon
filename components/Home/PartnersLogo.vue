<template>
    <div>
        <div class="rts-pricing-area rts-section-gap position-relative">
            <div class="container-2">
                <div class="row brad-pricing-area-start">
                    <div class="col-lg-12">
                        <div class="pricing-wrapper-main">
                            <p>{{ sectionHeadingText }}</p>
                        </div>
                    </div>
                    <div class="col-lg-12 mt--60">
                        <div class="brand-area-style-one">
                            <a v-for="(logo, index) in logoIcons" :logo="logo" :key="index" class="rts-skew-up-gsap" href="jacascript:void(0)" @click="navigateTo('')">
                                <img :src="logo.imgUrl" :alt="logo.atlTxt">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    sectionHeadingText: {type: String, required: false},
    logoIcons: {type: Array, required: false},
    
});
</script>

<style scoped>
.rts-section-gap{
    padding: 70px 0 ;
}
</style>