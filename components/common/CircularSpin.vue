<template>
    <!-- <div> -->
        <div class="top-center-image rts-scroll-down-circle-wrapper-3">
            <a href="javascript:void(0)" @click="navigateTo(`/${link}`)" class="speen-shape scroll-down-circle-3">
                <svg class="uni-circle-text-path uk-text-secondary uni-animation-spin" viewBox="0 0 100 100"
                    width="180" height="180">
                    <defs>
                        <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                        </path>
                    </defs>
                    <text font-size="11.75">
                        <textPath xlink:href="#circle">{{ spinningText }}</textPath>
                    </text>
                </svg>
                <i class="fa-solid fa-star-sharp"></i>
            </a>
        </div>
    <!-- </div> -->
</template>

<script setup>
const props = defineProps({
    spinningText: { type: String, required: false },
    link : { type: String, required : false},
    // variantOne : { type: Boolean, required:true, default: false},
    // variantTwo : { type: Boolean, required:true, default: false},
});
</script>

<style scoped>

</style>