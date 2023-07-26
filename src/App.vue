<script setup>
import { carouselClose, fadeIn } from "@/plugins/animate.js";

const appDom = document.querySelector("#app");
provide("appDom", appDom);

const opShow = ref(true);
const toTop = () => {
  appDom.scrollTo({ top: 0, behavior: "smooth" });
};
const toTopDom = ref(null);

const handleScroll = () => {
  if (appDom.scrollTop >= 3500 && !toTopDom.value.animated) {
    fadeIn(toTopDom.value);
    toTopDom.value.animated = true;
  } else if (appDom.scrollTop <= 3500 && toTopDom.value.animated) {
    carouselClose(toTopDom.value);
    toTopDom.value.animated = false;
  }
};

onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  appDom.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <OpenLogo v-if="opShow" @to-close="opShow = false" />
  <a href="#" ref="toTopDom" class="btn_to-top" @click="toTop"><span></span></a>
  <HeaderBar />
  <HomePage />
  <AboutPage />
  <StoryPage />
  <FeaturePage />
  <PricePage />
  <ProfilePage />
  <InformationPage />
  <FooterPage />
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.btn_to-top {
  position: fixed;
  bottom: 9.3rem;
  right: 5rem;
  z-index: 90;
  display: block;
  width: 2rem;
  height: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--y-color-title);
  opacity: 0;
  transition: all 0.25s ease-out;
  @media only screen and (max-width: $bp-xs) {
    right: 2rem;
  }
  span {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    border-top: 1px solid var(--y-color-title);
    border-left: 1px solid var(--y-color-title);
    transform-origin: left top;
    transform: rotate(45deg);
  }
}
</style>
