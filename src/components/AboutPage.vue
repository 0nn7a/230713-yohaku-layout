<script setup>
import { fadeIn } from "@/plugins/animate.js";
const appDom = inject("appDom");
const aboutDom = ref(null);

const elsDom = computed({
  get() {
    return Array.from(aboutDom.value.childNodes);
  },
});

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  elsDom.value.forEach((el) => {
    let positionFromTop = el.getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0 && !el.animated) {
      fadeIn(el);
      el.animated = true;
    }
  });
};

onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  appDom.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section id="about" class="about_container" ref="aboutDom">
    <div class="about_img mb-3"></div>
    <h3 class="heading-1 mb-2">About us</h3>
    <p class="plain-text">
      提供安靜的環境與香醇的咖啡，陪伴您度過一段悠閒的時光。
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &_container {
    grid-row: 2 / span 1;
    grid-column: full-s / full-e;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15rem 5rem 10rem;
    text-align: center;
    & > * {
      opacity: 0;
    }
  }
  &_img {
    height: 50rem;
    width: 50rem;
    background: url("/src/assets/images/about_1.jpg") center no-repeat;
    background-size: cover;
  }
  .plain-text {
  }
}
</style>
