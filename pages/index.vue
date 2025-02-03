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
            <HomeServices :services-list="servicesList"/>
            <HomeIndustrialFocus :caroussel-data="carousselData" :heading="'Industry Focus Areas'" />
            <HomeProjects :projects-data="projectsData"/>
            <HomeKeyAchievement :tag="'Achievements'" :heading="'Key Achievements'" :achievements-list="achievementsList"/>
            <HomeTestimonials :testimonials-data="testimonialsData"/>
            <HomePartnersLogo 
                :logo-icons="logoIcons"
                :section-heading-text="'WE WORKED WITH GLOBAL LARGEST BRANDS'"
            />
        
        </div>
    </div>
</template>

<script setup>
import { logoIcons, servicesList, carousselData, projectsData, achievementsList, testimonialsData } from '/assets/data/data';
</script>

<style scoped>
.height{
    /* min-height: 100vh; */
    background-color: white
}
</style>