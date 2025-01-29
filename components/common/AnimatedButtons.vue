<template>
    <div>
        <button 
            @click="navigate(buttonLink)" 
            :type="type" 
            :disabled="disabled"
            class="bannerJump_animation banner-jump-button rts-scroll-down-circle-wrapper-4">
            <div class="jump__anim rts_round_btn_wrap scroll-down-circle-4">
                <div class="rts-mouse-move-button">
                    <div class="btn_wrapper">
                        <div class="rts-btn-mouse-move btn-hover btn-item"><span></span> {{ buttonText }}
                            <i class="fa-solid fa-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    buttonText: {type: String, required: false},
    buttonLink: {type: String, required: false},
    type: {type: String, required: false, default:'button'},
    disabled: {type: Boolean, required: false},
});

const navigate = (link) =>{
    if(link){
        navigateTo(`${link}`);
    }else{
        return
    }
}
</script>

<style scoped>

</style>