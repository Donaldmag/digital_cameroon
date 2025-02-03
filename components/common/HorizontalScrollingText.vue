<template>
    <div>
         <!-- <div id="smooth-wrapper">
            <div id="smooth-content"> -->
                <div class="rts-about-area-1">
                    <div class="container-full">
                        <!-- <div class="row">
                            <div class="col-lg-12">
                                <div class="grid-lines-wrapper">
                                    <div class="grid-lines">
                                        <div class="grid-line"></div>
                                        <div class="grid-line"></div>
                                        <div class="grid-line"></div>
                                        <div class="grid-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="row">
                            <div class="col-lg-12">
                                <div class="gsap-inner sec1">
                                    <div class="image-wrapper-main-about mt-dec-135 rts-reveal-one">
                                        <img :src="imgUrl" alt="about" class="rts-reveal-image-one">
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="text-split-wrap-about scrolltext-wrapper">
                            <div class="text-split scrollingText-two">
                                <h2 class="title">
                                    Digital Cameroon <span>Services</span>
                                    Digital Cameroon <span>Services</span>
                                    Digital Cameroon <span>Services</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div>
        </div> -->
    </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: { type: String, required: false },
});
</script>