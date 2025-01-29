<template>
    <div>
      <Header/>
        <slot/>
        <!-- <CommonScrollTop @click="scrollToTop()"/> -->
      <Footer/>
    </div>
</template>

<script setup>
const scrollToTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>