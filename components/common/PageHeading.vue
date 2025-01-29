<template>
    <div>
        <div class="rts-breadcrumb-area bg_image" :style="setBackgroundImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="baread-crumb-main-wrapper pt--100">
                            <div class="inner">
                                <span class="works">{{ pageSubHeading }}</span>
                                <h1 class="title rts_hero__title">{{ pageTitle }}</h1>
                                <span class="bg-text">{{ pageBackgroundText }}</span>
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
    backgroundImageUrl : {type:String, require:true},
    pageTitle : {type:String, require:true},
    pageSubHeading : {type:String, require:true},
    pageBackgroundText : {type:String, require:true},
});

const setBackgroundImage = computed(() =>{
    console.log('backgroundImageUrl', props.backgroundImageUrl);
    return {
        backgroundImage : `Url(${props.backgroundImageUrl})`
    }
});
</script>

<style scoped>

</style>