<template>
    <div>
      <Header/>
        <slot/>
        <CommonScrollTop/>
        <!-- <CommonDarklightSwitcher/> -->
        <div class="bg-noise"></div>
      <Footer/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Dynamically importing script file from /js/main
onMounted(() => {
  const script = document.createElement('script');
  script.src = '/js/main.js';
  script.async = true;
  document.body.appendChild(script);
});

</script>