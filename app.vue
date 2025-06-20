<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Digital Cameroon',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'A leading think tank and innovation laboratory dedicated to the digital transformation of Cameroon.' },
    { hid: 'keywords', name: 'keywords', content: 'Digital, Cameroon, technology, software, 2025, 2024, innovation, transformation' },
    { name: 'author', content: 'Digital Cameroon' },
    { name: 'robots', content: 'index, follow' },
  ],
});
</script>
