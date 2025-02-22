<template>
    <div>
        <swiper 
        :modules="modules" 
        :spaceBetween="swiperCarouselsOptions.spaceBetween" 
        :pagination="swiperCarouselsOptions.pagination" 
        :scrollbar="swiperCarouselsOptions.scrollbar" 
        :breakpoints="swiperCarouselsOptions.breakpoints"
        :speed="swiperCarouselsOptions.speed" 
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
import { swiperCarouselsOptions  } from '/assets/data/data';
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


// onMounted(()=>{
//     console.log('svgicons is', svgicons);
// })

const modules = [Scrollbar];
  
</script>

<style scoped>
.single-service-h2{
    min-height: 420px;
}
</style>