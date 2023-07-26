<script setup>
import { fadeIn, carouselShow, carouselClose } from "@/plugins/animate.js";
const appDom = inject("appDom");
const informationDom = ref(null);
const elsDom = computed({
  get() {
    return Array.from(informationDom.value.childNodes);
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

const carouselDom = ref([]);
const carousel = reactive({
  selected: 0,
  amount: [0, 1, 2, 3],
  time: 0,
});
const changeSelected = (index) => {
  if (index !== carousel.selected) {
    carouselClose(carouselDom.value[carousel.selected]);
    carouselShow(carouselDom.value[index]);
    carousel.selected = index;
  }
};
const timeToChange = () => {
  if (carousel.time) {
    if (carousel.selected === carousel.amount.length - 1) {
      carouselClose(carouselDom.value[carousel.selected]);
      carousel.selected = 0;
      carouselShow(carouselDom.value[carousel.selected]);
    } else {
      carouselClose(carouselDom.value[carousel.selected]);
      carousel.selected++;
      carouselShow(carouselDom.value[carousel.selected]);
    }
    carousel.time = false;
  }
};
watch(() => carousel.time, timeToChange);

let stop;
onMounted(() => {
  appDom.addEventListener("scroll", handleScroll);

  stop = setInterval(() => {
    carousel.time = true;
  }, 5000);
});
onUnmounted(() => {
  appDom.removeEventListener("scroll", handleScroll);

  clearInterval(stop);
});
</script>

<template>
  <section id="information" class="information_container" ref="informationDom">
    <div class="information_carousel">
      <ul class="information_carousel_images">
        <li
          ref="carouselDom"
          v-for="item in carousel.amount"
          :key="item"
          class="information_carousel_img"
          :class="`information_carousel_img-${item}`"
        ></li>
      </ul>
      <ul class="information_carousel_dots">
        <li
          v-for="item in carousel.amount"
          :key="item"
          :class="
            carousel.selected === item
              ? 'information_carousel_dot-selected'
              : 'information_carousel_dot'
          "
          @click="changeSelected(item)"
        ></li>
      </ul>
    </div>
    <div class="information_content">
      <h3 class="heading-1">Information</h3>
      <table class="information_table">
        <tr>
          <th class="heading-2">Address</th>
          <td class="plain-text">動物星貓貓市零食街 713 - 1F</td>
        </tr>
        <tr>
          <th class="heading-2">Open</th>
          <td class="plain-text">
            平　日 : 10:30〜20:30<br />
            五六日 : 10:30〜18:30
          </td>
        </tr>
        <tr>
          <th class="heading-2">Closed</th>
          <td class="plain-text">不定休</td>
        </tr>
        <tr>
          <th class="heading-2">Contact</th>
          <td class="plain-text">
            (02) 1999-1010<br />
            suannai1230@gmail.com
          </td>
        </tr>
        <tr>
          <th class="heading-2">Reserve</th>
          <td class="plain-text">
            您可以通過官方LINE帳號或來電預訂座位，如需包場需要預付一部分訂金。
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.information {
  &_container {
    grid-row: 7 / span 1;
    grid-column: full-s / full-e;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    padding: 10rem 0;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(2, max-content);
      grid-template-columns: 1fr;
    }
    & > * {
      opacity: 0;
    }
  }
  &_carousel {
    position: relative;
    &_images {
      position: relative;
      height: 50vw;
      width: 100%;
      @media only screen and (max-width: $bp-sm) {
        height: 40rem;
      }
    }
    &_img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      height: 50vw;
      width: 100%;
      @media only screen and (max-width: $bp-sm) {
        height: 40rem;
      }
      &-0 {
        background: url("/src/assets/images/infomation_1.jpg") center no-repeat;
        background-size: cover;
        opacity: 1;
      }
      &-1 {
        background: url("/src/assets/images/infomation_2.jpg") center no-repeat;
        background-size: cover;
        opacity: 0;
      }
      &-2 {
        background: url("/src/assets/images/infomation_3.jpg") center no-repeat;
        background-size: cover;
        opacity: 0;
      }
      &-3 {
        background: url("/src/assets/images/infomation_4.jpg") center no-repeat;
        background-size: cover;
        opacity: 0;
      }
    }
    &_dots {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1rem;
    }
    &_dot,
    &_dot-selected {
      position: relative;
      height: 3rem;
      width: 3rem;
      cursor: pointer;
      transition: all 0.25s ease-out;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        height: 0.6rem;
        width: 0.6rem;
        background-color: var(--y-color-white);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        opacity: 0.7;
      }
    }
    &_dot-selected {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        height: 1.8rem;
        width: 1.8rem;
        border: 1px solid var(--y-color-white);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (max-width: $bp-sm) {
      align-items: center;
    }
  }
  &_table {
    width: 100%;
    margin-top: 5rem;
    th {
      padding-right: 5rem;
    }
    th,
    td {
      text-align: start;
      vertical-align: top;
      padding-bottom: 2rem;
    }
    tr:last-of-type {
      th,
      td {
        padding-bottom: 0;
      }
    }
    @media only screen and (max-width: $bp-sm) {
      width: 40rem;
    }
    @media only screen and (max-width: $bp-xs) {
      table-layout: fixed;
      width: 100%;
      padding: 0 3rem;
      th {
        width: 6em;
        padding-right: 0;
      }
      td {
        word-wrap: break-word;
      }
    }
  }
}

.plain-text {
  line-height: 1.8;
}
</style>
