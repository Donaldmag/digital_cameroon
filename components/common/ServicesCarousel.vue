<template>
    <div>
        <swiper 
        :modules="modules" 
        :spaceBetween="swiperOptions.spaceBetween" 
        :pagination="swiperOptions.pagination" 
        :scrollbar="swiperOptions.scrollbar" 
        :breakpoints="swiperOptions.breakpoints"
        :speed="swiperOptions.speed" 
        @swiper="onSwiper"
        >
            <swiper-slide v-for="(industry, index) in carousselData" :industry="industry" :key="index" class="swiper-slide">
                <div class="single-service-h2">
                    <div class="icon">
                        <!-- <component :is="svgicons.icon"/> -->
                        
                    </div>
                    <div class="inner-content">
                        <a href="javascript:void(0)">
                            <h5 class="title">{{ industry.title }}</h5>
                        </a>
                        <p class="disc">
                            {{ industry.desc }}
                        </p>
                        <!-- <a href="#" class="btn-arrow-right">More info <i class="fa-regular fa-arrow-right"></i></a> -->
                    </div>
                </div>
            </swiper-slide>           
        </swiper>
    </div>
</template>

<script setup>
// import { svgicons } from '/assets/data/data';
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const ToSwipe = ref(0)

function onSwiper(swiper) {
    ToSwipe.value = swiper
}

const props = defineProps({
    carousselData: { type: Array, required: false },
});

// function slideNext() {
//     ToSwipe.value.slideNext()
// }

// function slidePrev() {
//     ToSwipe.value.slidePrev()
// }
// onMounted(()=>{
//     console.log('svgicons is', svgicons);
// })

const modules = [Scrollbar];

const swiperOptions = {
    spaceBetween: 0,
    slidesPerView: 11,
    scrollbar: { draggable: true, hide: true },
    speed: 800,
    breakpoints: {
        2560: {
        slidesPerView: 4.2,
        slidesPerGroup: 2,
        spaceBetween: 25,
        },

        1440: {
        slidesPerView: 4.2,
        slidesPerGroup: 2,
        spaceBetween: 25,
        },

        1280: {
        slidesPerView: 2.9,
        slidesPerGroup: 2.9,
        spaceBetween: 30,
        },

        1024: {
        slidesPerView: 2.3,
        slidesPerGroup: 2.3,
        spaceBetween: 30,
        },

        768: {
        slidesPerView: 2.1,
        slidesPerGroup: 2.1,
        spaceBetween: 30,
        },

        712: {
        slidesPerView: 2.3,
        slidesPerGroup: 2.3,
        spaceBetween: 20,
        },

        320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 2,
        },
    }
}   
</script>

<style scoped>
.single-service-h2{
    min-height: 420px;
}
</style>