<template>
    <div>
        <div class="banner-area banner-style-one hero__area-3 banner__jump" :style="setBackgroundImage">
            
            <CommonCircularSpin 
                :spinning-text="' Project SHowcase • Project SHowcase •'"
                :variant-one="true"
                :link="'contact'"
            />
            <div class="container">
                <div class="row  ptb--200 ptb_sm--150">
                    <div class="col-lg-9">
                        <div class="banner-one-wrapper mt--80">
                            <h1 class="title rts_hero__title">
                                Driving Results <br> with <span class="border-bottom-1">Creative Digital</span> <br>
                                Solutions
                            </h1>
                            <div class="para-wraph">
                                <p class="disc hero__sub-title hero-paragraph-text">
                                    {{ heroParagraphText }}
                                </p>
                            </div>

                            <CommonAnimatedButtons
                                :button-link="'/'"
                                :button-text="'more projects'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    backgroundImageUrl : {type:String, require:false},
    heroHeadingText: {type: String, required: false},
    heroParagraphText: {type: String, required: false},
});

const setBackgroundImage = computed(() =>{
    console.log('backgroundImageUrl', props.backgroundImageUrl);
    return {
        backgroundImage : `Url(${props.backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        height: '1080px',
        backgroundColor: '#0E0E0E',
    }
});
</script>

<style scoped>

</style>