<script setup>
import { carouselClose, fadeIn } from "@/plugins/animate.js";

const opDom = ref(null);
const logoDom = ref(null);

const emit = defineEmits(["toClose"]);

onMounted(() => {
  let left, top, right;
  [left, top, right] = Array.from(logoDom.value.children);
  fadeIn(left, 500);
  fadeIn(top, 1400);
  fadeIn(right, 2300);
  carouselClose(opDom.value, 3600);
  setTimeout(() => {
    emit("toClose");
  }, 5000);
});
</script>

<template>
  <section ref="opDom" class="op_container">
    <svg
      ref="logoDom"
      width="100"
      height="100"
      viewBox="35 35 100 95"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="left"
        d="M84.2745 104.999C65.8651 104.999 50.9414 90.0758 50.9414 71.6664V55.6665C69.3508 55.6665 84.2753 70.5902 84.2753 88.9996L84.2745 104.999Z"
      />
      <path
        id="top"
        d="M99.8501 60.4534C99.8501 66.0428 95.3191 70.5738 89.7297 70.5738C84.1404 70.5738 79.6093 66.0428 79.6093 60.4534C79.6093 54.8641 84.1404 50.333 89.7297 50.333C95.3191 50.333 99.8501 54.8641 99.8501 60.4534Z"
      />
      <path
        id="right"
        d="M120.941 66.333C102.532 66.333 87.6083 81.2567 87.6083 99.6661V115.666C106.018 115.666 120.941 100.742 120.941 82.3329V66.333Z"
      />
    </svg>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.op {
  &_container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    background-color: var(--y-color-white);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 16vw;
      width: 16vw;
      max-height: 12rem;
      max-width: 12rem;
      & > * {
        opacity: 0;
      }
    }
  }
}
</style>
