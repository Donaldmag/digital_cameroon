<template>
    <div>
        <li>
            <a :href="getHref(link)">
                <i :class="iconClass"></i>
            </a>
        </li>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: { type: String, required: false },
    link: { type: String, required: false, default: '#'},
});

const iconClass = computed(() => {
    return iconsTypes[props.icon];
});

const iconsTypes = {
    facebook: 'fa-brands fa-facebook-f',
    twitter: 'fa-brands fa-twitter',
    whatsapp: 'fa-brands fa-whatsapp',
    skype: 'fa-brands fa-skype',
    email: 'fa-regular fa-envelope'
};

const getHref = (link) =>{
    return `https://${link}`;
} 
</script>

<style scoped></style>