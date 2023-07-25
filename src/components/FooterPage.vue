<script setup>
import { fadeIn } from "@/plugins/animate.js";

const appDom = inject("appDom");
const footerDom = ref(null);

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  let positionFromTop = footerDom.value.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0) {
    fadeIn(footerDom.value);
    appDom.removeEventListener("scroll", handleScroll);
  }
};

onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <footer class="footer_container" ref="footerDom">
    <div class="footer_paragraph">
      <h5 class="footer_title">Epilogue</h5>
      <p class="plain-text">
        此網站為自主練習，並無商業用途，均採用開源素材，主要目的為學習運用<a
          href="https://animejs.com/"
          >Anime.js</a
        >套用動畫、一頁式網頁切版、響應式RWD。如有興趣歡迎前往<a
          href="https://github.com/0nn7a/230713-yohaku-layout"
          >Github</a
        >查看此專案的細節或<a
          href="https://www.cakeresume.com/me/0nn/portfolios"
          >CakeResume</a
        >觀看更多其他作品。
      </p>
    </div>
    <div class="footer_bottom">
      <p class="footer_copyright">©︎2023 *cu Café</p>
      <svg-icon
        icon-name="line"
        :icon-style="{
          width: '2rem',
          height: '2rem',
          fill: 'currentColor',
        }"
      />
      <svg-icon
        icon-name="instagram"
        :icon-style="{
          width: '2rem',
          height: '2rem',
          fill: 'currentColor',
        }"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.footer {
  &_container {
    grid-row: 8 / span 1;
    grid-column: full-s / full-e;
    padding: 5rem 0;
    @media only screen and (max-width: $bp-xs) {
      padding: 5rem 3rem;
    }
    //& > * {
    //    opacity: 0;
    //}
  }

  &_paragraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 8rem 16vw 20rem;
    @media only screen and (max-width: $bp-sm) {
      padding: 5rem 10vw 18rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 0 0 18rem;
    }
    @media only screen and (min-width: $bp-md) {
      padding: 10rem 18vw 22rem;
    }
    @media only screen and (min-width: $bp-lg) {
      padding: 12rem 20vw 25rem;
    }
    @media only screen and (min-width: $bp-xl) {
      padding: 16rem 20vw 30rem;
    }
  }
  &_title {
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--y-color-text);
    transform: skewX(-15deg);
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

  &_bottom {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    @media only screen and (max-width: $bp-sm) {
      justify-content: center;
    }
    svg {
      cursor: pointer;
      transition: all 0.25s ease-out;
      &:hover {
        color: var(--y-color-subtext);
      }
    }
  }
  &_copyright {
    padding-right: 1.5rem;
    font-family: jost, sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.06em;
    color: var(--y-color-text);
    border-right: 1px solid var(--y-color-light);
  }
}

.plain-text {
  text-align: justify;
}
</style>
