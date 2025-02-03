<template>
    <div>
         <div class="working-process-area rts-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="title-area-four-w text-start">
                            <span class="pre">{{ tag }}</span>
                            <h2 class="title quote">{{ heading }}</h2>
                        </div>
                    </div>
                </div>

                <div class="row mt-0">
                    <div class="col-lg-12">
                        <div class="main-process-wrapper">

                            <div v-for="(achievement, index) in achievementsList" :achievement="achievement" :key="achievement.id"
                             class="single-working-process-three">
                                <div class="icon">
                                    <img :src="achievement.icon" alt="">
                                </div>
                                <h5 class="title">{{ achievement.title }}</h5>
                                <p v-html="achievement.desc" class="disc">
                                </p>
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
    tag : { type: String, required: false },
    heading : { type: String, required: false },
    achievementsList: { type: Array, required: false },
});
</script>

<style scoped>
.single-working-process-three{
    min-height: 300px;
}
</style>