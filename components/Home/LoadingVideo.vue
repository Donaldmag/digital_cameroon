<template>
    <div>
        <div class="large-image-option-start rts-section-gap position-relative rts_jump_counter__animation">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-area-inner large-image">
                            <h2 class="title quote text-dark">Accelerating the adoption of digital <span>technologies</span> </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-160">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="large-video-playing grow">
                            <video controls loading="lazy">
                                <source :src="videoURL" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    videoURL: {type: String, required: false},
});
</script>

<style scoped>
.text-dark{
    color: #222222;
    font-weight: 200 !important;
    line-height: 120px;
}

.text-dark span{
    color: red !important;
    font-weight: 700 !important;
}

.rts-section-gap{
    padding: 50px 0;
}
</style>