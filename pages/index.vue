<template>
    <div>
        <div class="inner-page height">
            <HomeHeroBannerVariant
                :background-image-url="'https://img.freepik.com/premium-photo/wireframe-background-with-plexus-effect-futuristic-vector_1106493-221019.jpg'"
                :hero-heading-text="'Test'"
                :hero-link="'contact'"
            />
            <HomeLoadingVideo :video-url="'/images/videos/video.mp4'" :placeholder-image="''"/>
            <HomeAbout 
            :heading="'The Founder'"
            :about-txt="`At DigitalCameroon, we are dedicated to driving the digital transformation of Cameroon and positioning the country as a leader in Africa’s digital economy. In 2024, we made great strides by launching initiatives such as the E-Commerce Innovation Lab and proposing AI-driven solutions like TchatPost for government services. Our presence at global tech events like LEAP Riyadh and GITEX Global has opened doors to exciting new partnerships and opportunities, reinforcing our belief in Cameroon’s potential. As we look to 2025, we are thrilled to build on this momentum with our flagship project, Techritories, which will accelerate the digital, economic, social, and cultural transformation of Cameroon. With your continued support, we are confident that together, we will create a brighter and more inclusive digital future for the country.`"
            />
            <CommonHorizontalScrollingText
                :img-url="'/images/about/01.jpg'"
            />
            <HomeServices :services-list="servicesList"/>
            <HomeIndustrialFocus :caroussel-data="carousselData" :heading="'Industry Focus Areas'" />
            <HomeProjects :projects-data="projectsData"/>
            <HomeKeyAchievement :tag="'Achievements'" :heading="'Key Achievements'" :achievements-list="achievementsList"/>
            <!-- <HomeTestimonials :testimonials-data="testimonialsData"/> -->
            <HomePartnersLogo 
                :logo-icons="logoIcons"
                :section-heading-text="'Our Partners'"
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