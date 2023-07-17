<script setup>
const appDom = document.querySelector("#app");
provide("appDom", appDom);
</script>

<template>
  <HeaderBar />
  <HomePage />
  <AboutPage />
  <StoryPage />
  <FeaturePage />
</template>

<style lang="scss" scoped></style>
