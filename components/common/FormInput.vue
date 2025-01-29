<template>
    <div class="flex flex-col">
        <label :for="id">{{ labelText }}*</label>

        <input v-if="!selectionList" 
        :id="id" 
        :type="inputType" 
        :placeholder="placeholderText" 
        :required="requiredStatus"
        :disabled="disabledStatus"
        >     

        <!-- Is called inside a div with 'text-area' class -->
        <textarea v-if="isTextarea" 
        :id="id" 
        :rows="rowNumber"
        :cols="colNumber"
        :placeholder="placeholderText"
        :required="requiredStatus"
        />

        <select v-if="selectionList" class="form-select" :required="requiredStatus">
            <option disabled selected>{{ placeholderText }}</option>
            <option v-for="(options, index) in selectionList" :options="options" :key="options.id"
                :value="options.value"
            >{{ options.name }}</option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps({
    inputType : { type: String, required: true },
    id : { type: String, required: false },
    placeholderText : { type: String, required: true },
    labelText : { type: String, required: true },
    requiredStatus : { type: Boolean, required: true },
    disabledStatus : { type: Boolean, required: true },
    rowNumber : { type: Number, required: false, default: 10},
    colNumber : { type: Number, required: false, default: 30},
    isTextarea : { type: Boolean, required:false, default: false},
    selectionList : { type: Array },
});
</script>

<style scoped>

</style>