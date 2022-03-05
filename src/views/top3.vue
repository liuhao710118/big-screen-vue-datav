<template>
  <div id="top3" class="top3" style="color: white">
    <!-- <img style="width: 80%;height: 30vh;" src="/imgs/rank-bg.png"/> -->
    <!-- <img style="width: 90%; margin-top: 5vh" src="./images/platform.png" /> -->
    <div>
      <div class="tab" style="display:flex">
        <div v-for="(item, index) in data" :key="index" @click="tab(index)" >
          <div v-if="item.index == i" style="color:white">{{ item.name }}</div>
          <div v-else style="color:red">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="top3-items">
      <!-- 第二名 -->
      <div v-if="second !== null" class="top3-left-item">
        <img style="width: 60px; height: 30px" src="./images/silver-hat.png" />
        <div style="margin-top: -20px">{{ second.rank }}</div>
        <img
          style="
            width: 60px;
            height: 60px;
            border-radius: 30px;
            border-color: silver;
            border-width: 4px;
            border-style: solid;
          "
          :src="second.avatarUrl"
        />
        <span style="margin-top: 10px">{{ second.name }}</span>
        <div class="top3-value">{{ second.value }}</div>
      </div>
      <!-- 第一名 -->
      <div v-if="first !== null" class="top3-middle-item">
        <img style="width: 80px; height: 40px" src="./images/golden-hat.png" />
        <div style="margin-top: -20px">{{ first.rank }}</div>
        <img
          style="
            width: 80px;
            height: 80px;
            border-radius: 40px;
            border-color: gold;
            border-width: 4px;
            border-style: solid;
          "
          :src="first.avatarUrl"
        />
        <span style="margin-top: 10px">{{ first.name }}</span>
        <div class="top3-value">{{ first.value }}</div>
      </div>
      <!-- 第三名 -->
      <div v-if="third !== null" class="top3-right-item">
        <img style="width: 60px; height: 30px" src="./images/copper-hat.png" />
        <div style="margin-top: -20px">{{ third.rank }}</div>
        <img
          style="
            width: 60px;
            height: 60px;
            border-radius: 30px;
            border-color: lightsalmon;
            border-width: 4px;
            border-style: solid;
          "
          :src="third.avatarUrl"
        />
        <span style="margin-top: 10px">{{ third.name }}</span>
        <div class="top3-value">{{ third.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import boy from "./images/boy.png";
import girl from "./images/girl.png";
export default {
  data() {
    return {
      first: {
        id: 23,
        name: "刘文君",
        avatarUrl: girl,
        rank: 1,
        value: 8273,
        admires: 322,
        admired: true,
      },
      second: {
        id: 24,
        name: "崔晶晶",
        avatarUrl: girl,
        rank: 2,
        value: 7353,
        admires: 3242,
        admired: false,
      },
      third: {
        id: 25,
        name: "王文超",
        avatarUrl: boy,
        rank: 3,
        value: 5673,
        admires: 232,
        admired: false,
      },
      i: 0,
      data: [],
      timer: null, // 定时器
    };
  },
  components: {},
  mounted() {
    this.getData();
    this.timer = setInterval(() => {
      this.i += 1;
      if (this.i > 4) {
        this.i = 0; // 循环
      }
    }, 1000);
  },
  // 销毁定时器
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    async getData() {
      this.data = [
        { name: "跳绳数量", value: 11, percent: "11%", index:0 },
        { name: "最高跳速", value: 22, percent: "22%", index:1 },
        { name: "最多连跳", value: 33, percent: "33%", index:2 },
      ];
    },
    tab(index) {
      this.i = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.top3 {
  width: 100%;
  // height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: rgb(52 152 100);
}

.top3-items {
  width: 80%;
  // height: 30vh;
  // margin-top: -32vh;
  display: flex;
}

.top3-left-item {
  width: 30%;
  // height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3vh;
}

.top3-middle-item {
  width: 40%;
  // height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 20px; */
}

.top3-right-item {
  width: 30%;
  // height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3vh;
}

.top3-value {
  // margin-top: 40px;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 40px;
  // background-color: rgba(50, 50, 50, 0.3);
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
