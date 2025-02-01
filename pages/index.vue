<template>
    <div>
        <div class="inner-page">
            <HeroBanner 
                :background-image-url="'../images/banner/bg-shape.png'"
                :hero-heading-text="'Test'"
                :hero-paragraph-text="`Our team of experts is dedicated to helping you achieve your digital goals.
                                    From website design and development to SEO, PPC advertising, and social media
                                    marketing.`"
            />


           
        </div>
    </div>
</template>

<script setup>
const selectionList = [
    {id:1, name:'one', value:'One'},
    {id:2, name:'Two', value:'Two'},
    {id:3, name:'Three', value:'Three'},
];
</script>

<style scoped>
.height{
    min-height: 100vh;
    background-color: white
}
</style>