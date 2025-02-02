<template>
    <div>
        <button 
            @click="navigate(buttonLink)"
            :type="type"
            :class="buttonClass"
            :disabled="disabled"
             >
            {{ buttonText }}
            <i v-if="buttonStyle==='styleThree'" class="fa-solid fa-arrow-up-right"></i>
            <i v-if="buttonStyle==='styleFour'" class="fa-regular fa-plus"></i>
            <i v-if="buttonStyle==='styleFive'" class="fa-light fa-arrow-right"></i>
            <i v-if="buttonStyle==='styleSix'" class="fa-light fa-arrow-right"></i>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    buttonText: {type: String, required: false},
    buttonLink: {type: String, required: false},
    buttonStyle: {type: String, required: false, default:'styleThree'},
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

const buttonClass = computed(() =>{
    return buttonTypes[props.buttonStyle];
});

const buttonTypes = {
    styleOne:'rts-btn btn-primary btn-md',
    styleTwo:'rts-btn btn-primary-1 btn-md',
    styleThree:'learn-more-btn white btn-md',
    styleFour:'plus-btn btn-md',
    styleFive:'rts-btn btn-white',
    styleSix:'learn-more-btn text-dark btn-md',
}
</script>