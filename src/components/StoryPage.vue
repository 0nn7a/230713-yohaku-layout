<script setup>
import { fadeIn } from "@/plugins/animate.js";
const appDom = inject("appDom");
const storyDom = ref(null);

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  let positionFromTop = storyDom.value.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0) {
    fadeIn(storyDom.value);
    appDom.removeEventListener("scroll", handleScroll);
  }
};

onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <section id="story" class="story_container" ref="storyDom">
    <div class="story_img">
      <img src="/src/assets/images/story_1.jpg" alt="coffee" />
      <img src="/src/assets/images/story_2.jpg" alt="coffee" />
    </div>
    <div class="story_content">
      <h3 class="heading-1 mb-1">Brand Story</h3>
      <p class="plain-text">
        我們相信，咖啡能為人們建立連結。<br />
        一杯醇香的咖啡可以喚起人們內心最純粹的感受和情感。
      </p>
      <p class="plain-text">
        在「醇萃」，我們嚴選頂級的咖啡豆，精心烘焙和萃取。<br />
        我們致力於為您帶來最優質的咖啡體驗，以及一個舒適而親切的空間。<br />
        讓您可以在喧囂中尋找到片刻的寧靜與放鬆。
      </p>
      <p class="plain-text">
        我們的咖啡師是真正的藝術家。<br />
        他們用心和技藝創造出一杯杯完美的咖啡。<br />
        無論是經典的濃郁拿鐵還是創意十足的手沖咖啡，都將讓您流連忘返。
      </p>
      <p class="plain-text">
        歡迎您進入「醇萃」的咖啡世界，體驗那份純粹和醇厚。
      </p>
      <p class="plain-text">
        咖啡產業的可持續性對我們的地球至關重要。<br />
        因此，我們與來自世界各地的可靠咖啡農合作。<br />
        不僅能為您呈現高品質的咖啡，還能為咖啡產業和農民做出社會和環境貢獻。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.story {
  &_container {
    grid-row: 3 / span 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: max-content;
    grid-template-columns: 34vw 1fr;
    gap: 0 6vw;
    padding: 10rem 5rem;
    background-color: var(--y-color-cover);
    opacity: 0;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: max-content max-content;
      grid-template-columns: 1fr;
      gap: 4rem 0;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 10rem 0;
    }
    @media only screen and (min-width: $bp-lg) {
      grid-template-columns: 40vw 1fr;
      padding: 10rem 8rem;
    }
    @media only screen and (min-width: $bp-xl) {
      padding: 10rem 14rem;
    }
  }
  &_img {
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 1 / 2;
    }
    img {
      position: relative;
      display: block;
      height: 35vw;
      object-fit: cover;
      @media only screen and (max-width: $bp-sm) {
        &:first-of-type {
          height: 40vw;
          width: 60vw;
        }
        &:last-of-type {
          margin-left: auto;
          margin-top: -10rem;
          height: 30vw;
          width: 50vw;
        }
      }
      @media only screen and (max-width: $bp-xs) {
        &:first-of-type,
        &:last-of-type {
          width: 100%;
          height: auto;
          margin: 0;
        }
      }
      @media only screen and (min-width: $bp-md) {
        height: 30vw;
      }
      @media only screen and (min-width: $bp-lg) {
        height: 26vw;
      }
    }
  }
  &_content {
    grid-row: 1 / -1;
    grid-column: 2 / 3;
    justify-self: flex-start;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 2 / -1;
      grid-column: 1 / 2;
      justify-self: center;
      align-items: center;
      text-align: center;
      padding: 0 3rem;
    }
  }
}
</style>
