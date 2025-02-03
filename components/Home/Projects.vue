<template>
    <div>
         <div class="rts-project-area-7 rts-section-gap bg-dark-1 rts-team__area">
            <div class="container-full">
                <div class="col-lg-12">
                    <div class="main-wrapper-case-studies scrolltext-wrapper">
                        <div class="scrollingText">
                            <h2 class="title">
                                <span>Initiatives / </span>Projects / 
                                <span>Initiatives / </span>Projects / 
                                <span>Initiatives / </span>Projects / 
                                <span>Initiatives / </span>Projects / 
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt--100">
                <div v-for="(project, index) in projectsData" :project="porject" :key="project.id"
                    class="row mt--120 mt_md--50 mt_sm--30" :class="{'row-reverse' : project.id % 2 === 0}">
                    <div class="col-lg-7">
                        <a href="javascript:void(0)" @click="openSite(project.siteUrl)" class="thumbnail rts-team__item">
                            <img :src="project.img" alt="product">
                        </a>
                    </div>
                    <div class="col-lg-5">
                        <div class="inner-content-product-h6">
                            <div class="inner">
                                <h2 class="title">{{ project.name }}</h2>
                                <span>{{ project.desc }}</span>
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
    // heading : { type: String, required: false },
    projectsData: { type: Array, required: false },
});

const openSite = (link) => {
    if (link) {
        // window.href 
    }else return
}
</script>

<style scoped>
.row-reverse{
    flex-direction: row-reverse;
}
</style>