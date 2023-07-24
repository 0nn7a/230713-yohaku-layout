<script setup>
import { fadeIn } from "@/plugins/animate.js";

const appDom = inject("appDom");
const priceDom = ref(null);
const elsDom = computed({
  get() {
    return Array.from(priceDom.value.childNodes);
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

const menu = reactive({
  coffee: [
    { title: "Classic Latte", sub: "經典拿鐵", money: "$120～" },
    { title: "Hazelnut Cappuccino", sub: "榛果卡布奇諾", money: "$130～" },
    { title: "Iced Americano", sub: "冰美式咖啡", money: "$90～" },
    { title: "Espresso", sub: "意式濃縮咖啡", money: "$100～" },
  ],
  cookie: [
    { title: "Almond Biscotti", sub: "杏仁餅乾", money: "$50" },
    { title: "Chocolate Chip", sub: "巧克力曲奇", money: "$45" },
    { title: "Berry Cookies", sub: "綜合莓果餅乾", money: "$60" },
  ],
  cake: [
    { title: "Vanilla Chiffon", sub: "香草戚風蛋糕", money: "$120" },
    { title: "Signature Red Velvet", sub: "招牌紅絲絨", money: "$140" },
    { title: "Mango Mousse", sub: "芒果慕斯蛋糕", money: "$130" },
  ],
  other: [
    { title: "Matcha Red Bean Ice Cream", sub: "抹茶紅豆冰淇淋", money: "$60" },
    {
      title: "Chocolate Crunch Ice Cream",
      sub: "巧克力脆皮冰淇淋",
      money: "$55",
    },
    { title: "Cheesecake pudding", sub: "奶酪布丁", money: "$85" },
    { title: "Tofu pudding", sub: "豆腐布丁", money: "$75" },
  ],
});
</script>

<template>
  <section id="price" class="price_container" ref="priceDom">
    <div class="price_img"></div>
    <div class="price_menu">
      <h3 class="heading-1">Price Menu</h3>
      <div class="price_menu_coffee">
        <h5 class="badge">Coffee</h5>
        <div
          class="price_menu_item"
          v-for="item in menu.coffee"
          :key="item.title"
        >
          <h6 class="price_menu_title">{{ item.title }}</h6>
          <p class="price_menu_subtext">{{ item.sub }}</p>
          <span class="price_menu_money">{{ item.money }}</span>
        </div>
      </div>
      <div class="price_menu_cookie">
        <h5 class="badge">Cookie</h5>
        <div
          class="price_menu_item"
          v-for="item in menu.cookie"
          :key="item.title"
        >
          <h6 class="price_menu_title">{{ item.title }}</h6>
          <p class="price_menu_subtext">{{ item.sub }}</p>
          <span class="price_menu_money">{{ item.money }}</span>
        </div>
      </div>
      <div class="price_menu_cake">
        <h5 class="badge">Cake</h5>
        <div
          class="price_menu_item"
          v-for="item in menu.cake"
          :key="item.title"
        >
          <h6 class="price_menu_title">{{ item.title }}</h6>
          <p class="price_menu_subtext">{{ item.sub }}</p>
          <span class="price_menu_money">{{ item.money }}</span>
        </div>
      </div>
      <div class="price_menu_other">
        <h5 class="badge">Other</h5>
        <div
          class="price_menu_item"
          v-for="item in menu.other"
          :key="item.title"
        >
          <h6 class="price_menu_title">{{ item.title }}</h6>
          <p class="price_menu_subtext">{{ item.sub }}</p>
          <span class="price_menu_money">{{ item.money }}</span>
        </div>
      </div>
    </div>

    <div class="price_note">
      <div class="price_note_item">
        <h6 class="price_menu_title">Milk Type</h6>
        <p class="price_menu_subtext">奶類選擇</p>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">升級燕麥奶</div>
          <span class="price_note_money">+ $20</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">升級杏仁奶</div>
          <span class="price_note_money">+ $20</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">換豆奶</div>
          <span class="price_note_money">+ $0</span>
        </div>
      </div>
      <div class="price_note_item">
        <h6 class="price_menu_title">Add Flavor</h6>
        <p class="price_menu_subtext">添加風味</p>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">蜂蜜風味糖漿</div>
          <span class="price_note_money">+ $15</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">摩卡醬</div>
          <span class="price_note_money">+ $10</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">白巧克力醬</div>
          <span class="price_note_money">+ $15</span>
        </div>
      </div>
      <div class="price_note_item">
        <h6 class="price_menu_title">Size</h6>
        <p class="price_menu_subtext">容量選擇</p>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">特大杯 600ml</div>
          <span class="price_note_money">+ $30</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">大杯 480ml</div>
          <span class="price_note_money">+ $15</span>
        </div>
        <br />
        <div class="price_note_set">
          <div class="price_note_title">中杯 360ml</div>
          <span class="price_note_money">+ $0</span>
        </div>
      </div>
    </div>

    <div class="price_footer">
      <span class="remark-text">所有顯示的價格均含稅。</span>
      <span class="remark-text">奶類產品均使用光泉牛乳、去冰均不滿杯。</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.price {
  &_container {
    grid-row: 5 / span 1;
    grid-column: 1 / -1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10rem 5rem;
    background: url("/src/assets/images/bg3.png");
    background-size: 500px;
    @media only screen and (max-width: $bp-sm) {
      padding: 10rem 2rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 10rem 0;
    }
    @media only screen and (min-width: $bp-lg) {
      padding: 10rem 8rem;
    }
    @media only screen and (min-width: $bp-xl) {
      padding: 10rem 14rem;
    }
    & > * {
      opacity: 0;
    }
  }

  &_img {
    height: 40vw;
    width: 100%;
    object-fit: cover;
    background: url("/src/assets/images/price_1.jpg") center no-repeat;
    background-size: cover;
    transition: all 0.75s ease-out;
    @media only screen and (max-width: $bp-sm) {
      height: 40vh;
    }
  }

  &_menu {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    padding: 5rem 0;
    border-bottom: 1px solid var(--y-color-light);
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(5, max-content);
      grid-template-columns: 1fr;
      padding: 5rem 3rem;
      border: none;
    }
    @media only screen and (min-width: $bp-xl) {
      grid-template-rows: repeat(2, max-content);
      grid-template-columns: repeat(4, 1fr);
    }
    .heading-1 {
      grid-row: 1 / span 1;
      grid-column: 1 / -1;
      justify-self: center;
    }
    .badge {
      margin-bottom: 1rem;
    }
    &_coffee,
    &_cookie,
    &_cake,
    &_other {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    &_coffee {
      grid-row: 2 / span 1;
      grid-column: 1 / span 1;
    }
    &_cookie {
      grid-row: 2 / span 1;
      grid-column: 2 / span 1;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 3 / span 1;
        grid-column: 1 / span 1;
      }
    }
    &_cake {
      grid-row: 3 / span 1;
      grid-column: 1 / span 1;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 4 / span 1;
      }
      @media only screen and (min-width: $bp-xl) {
        grid-row: 2 / span 1;
        grid-column: 3 / span 1;
      }
    }
    &_other {
      grid-row: 3 / span 1;
      grid-column: 2 / span 1;
      @media only screen and (max-width: $bp-sm) {
        grid-row: 5 / span 1;
        grid-column: 1 / span 1;
      }
      @media only screen and (min-width: $bp-xl) {
        grid-row: 2 / span 1;
        grid-column: 4 / span 1;
      }
    }

    &_item {
      width: 100%;
      display: grid;
      grid-template-rows: repeat(2, max-content);
      grid-template-columns: 1fr max-content;
      gap: 0.1rem;
    }
    &_title {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;

      font-family: EB Garamond, sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      line-height: 1.4;
      color: var(--y-color-text);
      @media only screen and (min-width: $bp-lg) {
        font-size: 1.6rem;
      }
      @media only screen and (min-width: $bp-xl) {
        font-size: 1.8rem;
      }
    }
    &_subtext {
      grid-row: 2 / span 1;
      grid-column: 1 / span 1;

      font-family: Shippori Mincho, Zen Old Mincho, sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      line-height: 1.4;
      color: var(--y-color-subtext);
      @media only screen and (min-width: $bp-lg) {
        font-size: 1.3rem;
      }
      @media only screen and (min-width: $bp-xl) {
        font-size: 1.5rem;
      }
    }
    &_money {
      grid-row: 1 / -1;
      grid-column: 2 / span 1;
      align-self: center;

      font-family: "Jost", sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--y-color-text);
      @media only screen and (min-width: $bp-lg) {
        font-size: 1.5rem;
      }
      @media only screen and (min-width: $bp-xl) {
        font-size: 1.7rem;
      }
    }
  }

  &_note {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 0;
    border-bottom: 1px solid var(--y-color-light);
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(3, max-content);
      grid-template-columns: 1fr;
      padding: 2rem;
      gap: 3rem;
      border: 1px solid var(--y-color-light);
    }
    @media only screen and (max-width: $bp-xs) {
      margin: 0 2rem;
    }
    &_item {
      display: flex;
      flex-direction: column;
      &:not(:first-child) {
        margin-left: -1rem;
        padding-left: 2rem;
        border-left: 1px solid var(--y-color-light);
        @media only screen and (max-width: $bp-sm) {
          margin-left: 0;
          padding-left: 0;
          border: none;
        }
      }
    }
    &_set {
      display: flex;
      flex-direction: column;
      @media only screen and (max-width: $bp-sm) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    &_title {
      font-family: Shippori Mincho, Zen Old Mincho, sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 1.4;
      color: var(--y-color-text);
      @media only screen and (min-width: $bp-lg) {
        font-size: 1.4rem;
      }
      @media only screen and (min-width: $bp-xl) {
        font-size: 1.6rem;
      }
    }
    &_money {
      font-family: "Jost", sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--y-color-text);
      @media only screen and (min-width: $bp-lg) {
        font-size: 1.5rem;
      }
      @media only screen and (min-width: $bp-xl) {
        font-size: 1.7rem;
      }
    }
  }

  &_footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
    @media only screen and (max-width: $bp-xs) {
      margin: 0 2rem;
    }
  }
}
</style>
