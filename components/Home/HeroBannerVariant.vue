<template>
    <div>

          <div class="rts-banner-area-7 rts-section-gap rts-scroll-down-circle-wrapper-3" :style="setBackgroundImage">
            <!-- small start -->
            <div class="icon-area-small scroll-down-circle-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="73" viewBox="0 0 71 73" fill="none">
                    <path d="M34.0968 73L33.8044 71.5365C28.8917 46.4226 25.0902 42.2077 2.4568 36.7634L1.28711 36.4707L2.4568 36.178C25.0902 30.7923 28.8917 26.5188 33.8044 1.46351L34.0968 0L34.3892 1.46351C39.3019 26.5188 43.1034 30.7923 65.7368 36.178L66.9065 36.4707L65.7368 36.7634C43.1034 42.2077 39.3019 46.4226 34.3892 71.478L34.0968 73ZM3.80194 36.4707C25.0318 41.6808 29.4181 46.4812 34.0968 69.9559C38.8341 46.5397 43.1619 41.7394 64.3917 36.4707C43.1619 31.2606 38.8341 26.4603 34.0968 3.04411C29.3596 26.4603 25.0318 31.2606 3.80194 36.4707Z" fill="white" />
                    <path d="M59.7135 26.4018L59.4211 24.9383C57.9005 17.1524 56.7308 15.8059 49.7127 14.1668L48.543 13.8741L49.7127 13.5814C56.7308 11.8837 57.9005 10.5958 59.4211 2.80995L59.7135 1.34644L60.0059 2.80995C61.5265 10.5958 62.6962 11.8837 69.7143 13.5814L70.884 13.8741L69.7143 14.1668C62.6962 15.8645 61.5265 17.1524 60.0059 24.9383L59.7135 26.4018ZM50.9993 13.8741C56.8477 15.3962 58.3683 17.0353 59.7135 23.4162C61.1171 16.9767 62.5792 15.3962 68.4276 13.8741C62.5792 12.3521 61.0586 10.7129 59.7135 4.332C58.3099 10.7129 56.8477 12.2935 50.9993 13.8741Z" fill="white" />
                    <path d="M7.25206 63.458L6.95964 61.9945C6.02389 57.2527 5.38056 56.5502 1.16969 55.555L0 55.2623L1.16969 54.9696C5.43904 53.9744 6.08237 53.2134 6.95964 48.5302L7.25206 47.0667L7.54448 48.5302C8.48023 53.2719 9.12356 53.9744 13.3344 54.9696L14.5041 55.2623L13.3344 55.555C9.06507 56.5502 8.42175 57.3112 7.54448 61.9945L7.25206 63.458ZM2.33937 55.2038C5.43904 56.0819 6.43328 57.0771 7.19357 60.4724C8.01235 57.0771 8.9481 56.0819 12.0478 55.2038C8.9481 54.3257 7.95387 53.3305 7.19357 49.9351C6.43328 53.3305 5.49753 54.3257 2.33937 55.2038Z" fill="white" />
                </svg>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-inner-7">
                            <h1 class="title text-center rts_hero__title">
                                A leading <span>think <span class="go-red">tank</span> </span> and <br><span> <span class="go-red">innovation</span> laboratory </span><br> dedicated to the <span>digital <span class="go-red">transformation</span></span> of Cameroon.
                            </h1>

                            <div class="top-center-image rts-scroll-down-circle-wrapper-5">
                                <a href="javascript:void(0)" @click="navigateTo(`/${heroLink}`)" class="speen-shape scroll-down-circle-5">
                                    <svg class="uni-circle-text-path uk-text-secondary uni-animation-spin" viewBox="0 0 100 100" width="180" height="180">
                                        <defs>
                                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                                            </path>
                                        </defs>
                                        <text font-size="11.75">
                                            <textPath xlink:href="#circle">Project SHowcase • Project SHowcase •</textPath>
                                        </text>
                                    </svg>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </a>
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
    heroLink: { type: String, require: false },
    backgroundImageUrl : {type:String, require:false},
    heroHeadingText: {type: String, required: false},
    
});

const setBackgroundImage = computed(() =>{
    return {
        backgroundImage : `Url(${props.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '960px',
    }
});
</script>

<style scoped>
@media screen and (min-width: 575px) {
    .banner-inner-7 .title{
        font-size: 55px !important;
        line-height: 80px !important;
    }
    
    .banner-inner-7 .title span{
        font-size: 80px !important;
    }
}

.go-red{
    color: red !important;
}

.banner-inner-7 .title{
        font-size: 35px;
        line-height: 45px;
    }
    
    .banner-inner-7 .title span{
        font-size: 55px;
    }
</style>