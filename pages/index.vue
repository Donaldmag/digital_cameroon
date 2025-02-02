<template>
    <div>
        <div class="inner-page height">
            <HomeHeroBannerVariant
                :background-image-url="'/images/banner/27.jpg'"
                :hero-heading-text="'Test'"
                :hero-link="'contact'"
                
            />

            <HomeLoadingVideo :video-url="'/images/video/02.mp4'"/>
            <HomeAbout/>
            <CommonHorizontalScrollingText
            :img-url="'/images/about/01.jpg'"
            />
            <HomeServices :service-list="servicesList"/>
            <HomePartnersLogo 
            :logo-icons="logoIcons"
            :section-heading-text="'WE WORKED WITH GLOBAL LARGEST BRANDS'"
            />
        
        </div>
    </div>
</template>

<script setup>
import { logoIcons, servicesList } from '/assets/data/data';
</script>

<style scoped>
.height{
    /* min-height: 100vh; */
    background-color: white
}
</style>