<script setup>
import { fadeIn } from "@/plugins/animate.js";

const appDom = inject("appDom");
const featureDom = ref(null);
const elsDom = computed({
  get() {
    return Array.from(featureDom.value.childNodes);
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

const content = reactive({
  data: [
    {
      icon: "feature_1",
      title: "Variety",
      sub: "咖啡豆",
      text: "提供來自世界各地的珍稀咖啡品種，每一杯咖啡都散發著獨特的風味和口感，讓您盡享獨特的咖啡體驗。",
    },
    {
      icon: "feature_2",
      title: "Technology",
      sub: "技術",
      text: "咖啡師不斷探索和創新，掌握各種衝煮技藝，從手衝到萃取，為您呈現出卓越的咖啡藝術，讓每一杯咖啡都成為一場令人難忘的品味之旅。",
    },
    {
      icon: "feature_3",
      title: "Personalise",
      sub: "個性化",
      text: "我們注重每位客人的獨特口味和喜好，因此我們提供個性化的咖啡調配服務，根據您的要求和喜好調整咖啡的濃度、甜度和奶泡比例，讓每一杯都符合您的獨特口味需求。",
    },
    {
      icon: "feature_4",
      title: "Culture",
      sub: "文化",
      text: "不僅僅是一家咖啡館，更是一個展示咖啡文化的場所。舉辦各種咖啡活動、品鑑會和講座，讓您深入了解咖啡的起源、烘焙過程和品質認知，為您帶來全方位的咖啡文化體驗。",
    },
    {
      icon: "feature_5",
      title: "Green",
      sub: "環保",
      text: "我們致力於推動咖啡行業的可持續發展。我們採用環保的咖啡杯和可降解的包裝材料，鼓勵客人自帶杯和使用可回收的咖啡豆包裝，共同關注環境保護，為地球貢獻一份力量。",
    },
    {
      icon: "feature_6",
      title: "Community",
      sub: "社區",
      text: "積極參與社區活動，並與當地藝術家、社區組織合作。我們提供展示藝術作品的空間，舉辦音樂會和文化交流活動，為社區創造一個聚集和互動的平台，讓咖啡與社區文化相融合。",
    },
  ],
});
</script>

<template>
  <section id="feature" class="feature_container" ref="featureDom">
    <div class="feature_img"></div>
    <div class="feature_header">
      <h3 class="heading-1">Feature</h3>
      <p class="plain-text">
        在城市的喧囂中，有一間名為「醇萃」的咖啡館，它承載著對咖啡的無限熱愛與執著。<br />
        「醇萃」是一個溫暖而獨特的場所，訴說著每一杯咖啡的故事。讓我們一同品味咖啡的精髓，創造美好時光。
        <br /><br />
        無論是與親朋好友聚會還是獨自靜思，我們的咖啡館為您用心準備溫馨而舒適的空間。<br />
        當您踏入「醇萃」咖啡館，迎面而來的是濃郁的咖啡香氣，讓您瞬間感受到溫暖和寧靜。無論是與朋友共享一杯咖啡還是獨自享受片刻的寧靜，我們的咖啡館為您創造出溫暖懷抱的氛圍。
      </p>
    </div>
    <div class="feature_content">
      <div class="feature_item" v-for="item in content.data" :key="item.title">
        <svg-icon
          :icon-name="item.icon"
          :icon-style="{ width: '6rem', height: '6rem' }"
        />
        <h4 class="heading-2">{{ item.title }}</h4>
        <h5 class="heading-3">{{ item.sub }}</h5>
        <p class="plain-text-2">{{ item.text }}</p>
      </div>
    </div>
    <div class="feature_footer">
      <img src="/src/assets/images/feature_2.jpg" alt="books" />
      <h4 class="heading-2">Other Activity</h4>
      <h5 class="heading-3">其他活動</h5>
      <p class="plain-text-2">
        提供獨特的咖啡與閱讀體驗，讓您在這裡感受咖啡和文字的交織之美。我們獨特的藏書角提供豐富多樣的書籍，涵蓋文學、藝術、歷史、哲學、旅行和咖啡文化等領域。
        這個角落被精心設計，為您營造出寧靜而舒適的閱讀環境。在柔軟的沙發上，您可以盡情沉浸於書海之中，感受咖啡的香氣與文字的魅力相互交融。
        不論您是咖啡愛好者、文學迷還是尋求知識的人，藏書角都能滿足您的閱讀需求。無論是放鬆身心、尋找靈感還是追尋知識，藏書角將成為您心靈的驛站，沉浸於咖啡和知識的雙重滋養。
        來到「醇萃」，與一杯香醇咖啡和一本精彩的書籍相伴，開啟屬於您的美好時光。歡迎來到咖啡與知識的交匯之地，展開一段充滿靈感和品味的閱讀之旅。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.feature {
  &_container {
    grid-row: 4 / span 1;
    grid-column: full-s / full-e;

    display: flex;
    flex-direction: column;
    padding: 10rem 0;

    & > * {
      opacity: 0;
    }
  }
  &_img {
    height: 30vw;
    width: 100%;
    background: url("/src/assets/images/feature_1.jpg") center no-repeat;
    background-size: 100%;
    transition: all 0.75s ease-out;
    &:hover {
      background-size: 105%;
    }
    @media only screen and (max-width: $bp-sm) {
      height: 50vw;
    }
  }
  &_header {
    display: flex;
    align-items: flex-start;
    gap: 8rem;
    padding: 8rem 0;
    border-bottom: 1px solid var(--y-color-light);
    @media only screen and (max-width: $bp-sm) {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      padding: 5rem 3rem;
      text-align: justify;
    }
  }

  &_content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    padding: 8rem 0;
    align-content: stretch;
    @media only screen and (max-width: $bp-md) {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
    @media only screen and (max-width: $bp-sm) {
      padding: 5rem 3rem;
    }
  }
  &_item {
    display: grid;
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-template-columns: 8rem 1fr;
    @media only screen and (max-width: $bp-sm) {
      grid-template-columns: 5rem 1fr;
      align-items: center;
      justify-items: center;
      gap: 0 3rem;
    }
    svg {
      grid-row: 1 / span 2;
      grid-column: 1 / span 1;
      align-self: flex-end;
      fill: var(--y-color-key-1);
      @media only screen and (max-width: $bp-sm) {
        grid-row: 1 / span 1;
      }
    }
    h4 {
      grid-row: 1 / span 1;
      grid-column: 2 / -1;
      align-self: flex-end;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 2 / span 1;
        grid-column: 1 / span 1;
      }
    }
    h5 {
      grid-row: 2 / span 1;
      grid-column: 2 / -1;
      align-self: flex-start;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 3 / span 1;
        grid-column: 1 / span 1;
        align-self: flex-start;
      }
    }
    p {
      grid-row: 3 / -1;
      grid-column: 1 / -1;
      margin: 2rem 0 0;
      text-align: justify;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 1 / -1;
        grid-column: 2 / span 1;
        margin: 0;
      }
    }
  }

  &_footer {
    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: 32vw max-content 1fr;
    align-items: center;
    gap: 2rem 5rem;
    padding: 5rem;
    background-color: var(--y-color-cover);
    border: 1px solid var(--y-color-light);
    @media only screen and (max-width: $bp-md) {
      grid-template-rows: 30vw max-content max-content;
      grid-template-columns: max-content 1fr;
      gap: 2rem;
      padding: 2rem;
    }
    @media only screen and (max-width: $bp-xs) {
      grid-template-rows: 45vw max-content max-content;
      margin: 0 2rem;
    }
    img {
      display: block;
      grid-row: 1 / span 2;
      grid-column: 1 / span 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media only screen and (max-width: $bp-md) {
        grid-row: 1 / span 1;
        grid-column: 1 / -1;
      }
    }
    h4 {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
      align-self: flex-end;
      @media only screen and (max-width: $bp-md) {
        grid-row: 2 / span 1;
        grid-column: 1 / 2;
      }
    }
    h5 {
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
      align-self: flex-end;
      @media only screen and (max-width: $bp-md) {
        grid-row: 2 / span 1;
        grid-column: 2 / -1;
      }
    }
    p {
      grid-row: 2 / span 1;
      grid-column: 2 / span 2;
      align-self: flex-start;
      text-align: justify;
      @media only screen and (max-width: $bp-md) {
        grid-row: 3 / -1;
        grid-column: 1 / -1;
      }
    }
  }
}
</style>
