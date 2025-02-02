<template>
    <div>
         <div class="rts-section-gap rts-service-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="service-area-one-main-wrapper">

                            <div v-for="(service, index) in servicesList" :service="service" :key="index"
                                class="single-item-service-one">
                                <a href="javascript:void(0)" @click="navigateTo(`/${service.link}`)">
                                    <div class="rts-img-contaciner">
                                        <figure class="list-img">
                                            <img class="list-img" :src="service.imgUrl" alt="Stream Shop">
                                        </figure>
                                    </div>
                                    <div class="list-title col-md-6">
                                        <h3>{{ service.name }}</h3>
                                    </div>
                                    <div class="list-info col-md-3">
                                        <p class="disc">
                                            {{ service.description }}
                                        </p>
                                    </div>
                                    <div class="button-area">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                            <g>
                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
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
    servicesList : { type: Array, required: true },
});
console.log('props is', props.servicesList);
</script>