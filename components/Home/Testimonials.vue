<template>
    <div>
        <div class="trusted-clients-area-start rts-section-gap">
            <div class="container-full">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-wrapper-case-studies scrolltext-wrapper">
                            <div class="scrollingText-three">
                                <h2 class="title">
                                    our <span>Partners</span> Says .
                                    our <span>Partners</span> Says .
                                    our <span>Partners</span> Says .
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt--100">
                <div v-for="(data, index) in testimonialsData" :data="data" :key="index" 
                    class="row g-5 mt--80 mt_sm--30">
                    <div class="col-lg-8 pr--100 pr_md--50 pr_sm--20">
                        <div class="swiper-testimonails-style-one-main-wrapper">
                            <div class="swiper mySwiper-testimonial-1">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="single-testimonials-main-wrapper">
                                            <div class="body">
                                                <p class="disc">
                                                    {{ data.desc }}
                                                </p>
                                                <div class="author-area">
                                                    <div class="info-wrapper">
                                                        <h6 class="title">{{ data.author }}</h6>
                                                        <span>{{ data.authorTitle }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="after-effect-testi-right-img">
                            <div class="thumbnail-clients-img rts-reveal-two bg--dark">
                                <img class="rts-reveal-image-two" :src="data.imgUrl" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    testimonialsData : { type: Array, required: false },
});
</script>

<style scoped>

</style>