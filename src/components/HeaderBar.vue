<script setup>
import { autoOpacity } from "@/plugins/animate.js";

const header = ref(null);
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
onMounted(() => {
  autoOpacity(header.value);
});
</script>

<template>
  <header ref="header" class="header_container">
    <div class="header_logo">
      <svg-icon
        icon-name="leaf"
        :icon-style="{ width: '5rem', height: '5rem', fill: 'currentColor' }"
      />
      <h2>醇萃</h2>
    </div>
    <button class="header_btn-open" type="button" @click="toggleMenu">
      Menu
    </button>
  </header>
  <transition name="opacity">
    <header v-if="menuOpen" class="header_full">
      <div class="header_logo">
        <svg-icon
          icon-name="leaf"
          :icon-style="{ width: '5rem', height: '5rem', fill: 'currentColor' }"
        />
        <h2>醇萃</h2>
      </div>
      <button class="header_btn-close" type="button" @click="toggleMenu">
        Close
      </button>
      <nav class="header_nav">
        <a href="#home" class="header_link" @click="toggleMenu">Top</a>
        <a href="#about" class="header_link" @click="toggleMenu">About us</a>
        <a href="#story" class="header_link" @click="toggleMenu">Brand Story</a>
        <a href="#feature" class="header_link" @click="toggleMenu">Feature</a>
        <a href="#" class="header_link" @click="toggleMenu">Profile</a>
        <a href="#" class="header_link" @click="toggleMenu">Information</a>
      </nav>
      <div class="header_footer">
        <p>2074-1 Kobukicho, Mito-shi,</p>
        <p>Ibaraki-ken 310-0914, Japan [Map]</p>
      </div>
    </header>
  </transition>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.header {
  &_container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 5rem;
    backdrop-filter: blur(10px);
    background-color: hsla(0, 0%, 100%, 0.5);
    color: var(--y-color-text);
    @media only screen and (max-width: $bp-xs) {
      padding: 0 2rem;
    }
  }
  &_full {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: 5rem 1fr 2fr 1fr 5rem;
    background-color: var(--y-color-base-2);
    color: var(--y-color-base-1);
    @media only screen and (max-width: $bp-xs) {
      grid-template-columns: 2rem 1fr 2fr 1fr 2rem;
    }
  }

  &_logo {
    grid-row: 1 / 2;
    grid-column: 2 / 4;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: auto;
    padding: 2.5rem 0;
    color: inherit;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
      color: var(--y-color-subtext);
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      color: currentColor;
    }
  }
  &_btn-open {
    @extend %btn;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      height: 0.8rem;
      width: 0.8rem;
      background-color: currentColor;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
  &_btn-close {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    justify-self: flex-end;
    align-self: center;

    @extend %btn;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -2px;
      height: 1px;
      width: 1.5rem;
      background-color: currentColor;
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  &_nav {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    justify-self: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: var(--y-color-base-1);
  }
  &_link {
    position: relative;
    padding: 0.5rem 1rem;
    font-family: Jost, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: inherit;
    transition: all 0.3s ease-out;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 3px;
      transform: scaleY(0);
      background-color: var(--y-color-base-1);
      transition: transform 0.2s ease-out,
        width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s ease-out;
    }
    &:hover {
      color: var(--y-color-base-2);
      &::before {
        width: 100%;
        transform: scaleY(1);
      }
    }
    @media only screen and (min-width: $bp-sm) {
      font-size: 1.8rem;
    }
    @media only screen and (min-width: $bp-xl) {
      font-size: 2.2rem;
    }
  }
  &_footer {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    justify-self: center;

    font-family: Jost, sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    line-height: 2;
    letter-spacing: 1px;
    padding: 5rem 0;
    @media only screen and (min-width: $bp-sm) {
      font-size: 1.3rem;
    }
    @media only screen and (min-width: $bp-xl) {
      font-size: 1.5rem;
    }
  }
}

%btn {
  position: relative;
  padding-left: 1.5rem;
  border: none;
  background-color: transparent;
  font-family: jost, sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: inherit;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    color: var(--y-color-subtext);
  }
  @media only screen and (min-width: $bp-lg) {
    padding-left: 1.8rem;
    font-size: 1.5rem;
  }
}
</style>
