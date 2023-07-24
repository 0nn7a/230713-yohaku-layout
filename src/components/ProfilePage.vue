<script setup>
import { fadeIn } from "@/plugins/animate.js";
const appDom = inject("appDom");
const profileDom = ref(null);

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  let positionFromTop = profileDom.value.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0) {
    fadeIn(profileDom.value);
    appDom.removeEventListener("scroll", handleScroll);
  }
};

onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <section id="profile" class="profile_container" ref="profileDom">
    <div class="profile_img"></div>
    <h3 class="heading-1">Profile</h3>
    <div class="profile_content">
      <h4 class="profile_name-zh">林奈 0nn</h4>
      <h5 class="profile_name-en">infj</h5>
      <p class="plain-text">
        1999年生，畢業於國立臺灣師範大學，自學前端。此咖啡館網頁為一頁式切版的自主練習，圖片來自圖庫PhotoAC、Freepik，Icon來自SVGrepo、LogoToUse，佈局參考Yohaku網站，文案發想借助ChatGPT。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.profile {
  &_container {
    grid-row: 6 / span 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: max-content 1fr;
    justify-items: flex-start;
    align-items: center;
    gap: 2rem 5rem;
    padding: 10rem 12rem;
    background-color: var(--y-color-cover);
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(3, max-content);
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 0;
      padding: 10rem 2rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 10rem 0;
    }
    @media only screen and (min-width: $bp-lg) {
      padding: 10rem 18vw;
    }
  }
  &_img {
    grid-row: 1 / -1;
    grid-column: 1 / span 1;
    height: 20rem;
    width: 20rem;
    object-fit: cover;
    background: url("/src/assets/images/profile_1.jpg") center no-repeat;
    background-size: cover;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 2 / span 1;
      margin: 3rem 0 1rem;
    }
  }
  &_content {
    grid-row: 2 / span 1;
    grid-column: 2 / -1;
    align-self: flex-start;
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: max-content 1fr;
    gap: 1rem;
    justify-items: flex-start;
    align-items: flex-end;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 3 / span 1;
      grid-column: 1 / -1;
      grid-template-rows: repeat(3, max-content);
      grid-template-columns: 1fr;
      gap: 0;
      justify-items: center;
    }
  }
  &_name {
    &-zh {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      font-family: "Shippori Mincho", "Zen Old Mincho", sans-serif;
      font-size: 2.2rem;
      font-weight: 400;
      letter-spacing: 0.02em;
      color: var(--y-color-text);
      @media only screen and (max-width: $bp-xl) {
        font-size: 1.8rem;
      }
      @media only screen and (max-width: $bp-lg) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: $bp-md) {
        font-size: 1.4rem;
      }
    }
    &-en {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
      font-family: "EB Garamond", sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--y-color-subtext);
      @media only screen and (max-width: $bp-sm) {
        grid-row: 2 / span 1;
        grid-column: 1 / span 1;
      }
      @media only screen and (max-width: $bp-xl) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: $bp-lg) {
        font-size: 1.3rem;
      }
      @media only screen and (max-width: $bp-md) {
        font-size: 1.2rem;
      }
    }
  }
}

.heading-1 {
  grid-row: 1 / span 1;
  grid-column: 2 / -1;
  align-self: flex-end;
  @media only screen and (max-width: $bp-sm) {
    grid-column: 1 / -1;
  }
}
.plain-text {
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  text-align: justify;
  @media only screen and (max-width: $bp-sm) {
    grid-row: 3 / span 1;
    margin-top: 2rem;
    padding: 0 5rem;
  }
  @media only screen and (max-width: $bp-xs) {
    padding: 0 3rem;
  }
}
</style>
