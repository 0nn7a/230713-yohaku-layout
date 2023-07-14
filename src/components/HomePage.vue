<script setup>
import { scrollFadeIn } from "@/plugins/animate.js";
const elsDom = ref(null);
onMounted(() => {
  scrollFadeIn(elsDom.value);
});
</script>

<template>
  <section class="home_container" ref="elsDom">
    <div class="home_content">
      <h1 class="home_title">「醇萃」香氣中的美好時光。</h1>
      <p class="home_paragraph">
        A journey into the realm of exquisite coffee flavors and serene moments.
        Whether you seek solace in a quiet corner or engage in heartfelt
        conversations with kindred spirits.
      </p>
    </div>
    <div class="home_bg"></div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.home {
  &_container {
    grid-column: full-s / full-e;
    height: 100%;
    width: 100%;
    padding-top: 10rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    @media only screen and (max-width: $bp-md) {
      grid-template-rows: max-content 1fr;
      grid-template-columns: 1fr;
    }
  }
  &_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    margin: 8rem 5rem 8rem 0;
    @media only screen and (max-width: $bp-md) {
      margin: 8rem 0;
    }
  }
  &_title {
    font-size: 1.8rem;
    font-weight: 400;
    writing-mode: vertical-lr;
    letter-spacing: 3px;
    @media only screen and (min-width: $bp-lg) {
      font-size: 2.2rem;
    }
  }
  &_paragraph {
    max-width: 28rem;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: justify;
    @media only screen and (max-width: $bp-xs) {
      max-width: 24rem;
    }
    @media only screen and (min-width: $bp-lg) {
      font-size: 1.4rem;
      max-width: 36rem;
    }
  }
  &_bg {
    background: url("/src/assets/images/home_1.jpg") 65% no-repeat;
    background-size: cover;
  }
}
</style>
