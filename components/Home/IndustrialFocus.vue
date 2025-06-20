<template>
    <div>
        <div class="service-area rts-section-gapBottom start rts-case-service-area-h2 block-title bg-dark">
            <div class="water-txt-top rts-has-mask-fill">
                <span>{{ heading }}</span>
            </div>
            <CommonServicesCarousel :caroussel-data="carousselData"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    heading : { type: String, required: false },
    carousselData: { type: Array, required: false },
});
</script>

<style scoped>
.rts-case-service-area-h2 .water-txt-top{
    font-size: 116px;
}
@media screen and (max-width: 768px){
    .rts-case-service-area-h2 .water-txt-top{
    font-size: 68px;
    }
}
</style>