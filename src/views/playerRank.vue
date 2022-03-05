<template>
  <div id="playerRank" class="bg-color-black">
    <div
      class="d-flex pt-2 pl-2"
      style="display: flex; justify-content: space-between"
    >
      <div style="display: flex">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">个人数据排行榜</span>
        </div>
      </div>

      <div class="tab" style="display: flex; font-size: 10px">
        <div
          v-for="(item, index) in durationArray"
          :key="index"
          @click="durationTab(index)"
        >
          <div class="colorGrass" v-if="item.index == durationIndex">
            {{ item.name }}
          </div>
          <div v-else style="color: white">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- <img style="width: 80%;height: 30vh;" src="/imgs/rank-bg.png"/> -->
    <!-- <img style="width: 90%; margin-top: 5vh" src="./images/platform.png" /> -->
    <div style="display: flex; color: white; align-items: end; font-size: 10px">
      <div class="tab" style="display: flex">
        <div v-for="(item, index) in data" :key="index" @click="tab(index)">
          <div class="colorBlue" v-if="item.index == i">
            {{ item.name }}
          </div>
          <div v-else style="color: white">{{ item.name }}</div>
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

    <div class="d-flex jc-center body-box">
      <dv-scroll-board class="dv-scr-board" :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["姓名", "性别", "学校", "班级", "数据"],
        // data: [],
        data: [
          [
            "李民浩",
            "实验一中",
            "<span  class='colorGrass'>↑7325</span>",
            "<span  class='colorGrass'>↑143</span>",
            "<span  class='colorGrass'>↑75</span>",
          ],
          [
            "崔晓之",
            "育才学校",
            "<span  class='colorRed'>↓5433</span>",
            "<span  class='colorGrass'>↑175</span>",
            "<span  class='colorGrass'>↑272</span>",
          ],
          [
            "黄颖一",
            "实验一中",
            "<span  class='colorGrass'>↑3100</span>",
            "<span  class='colorGrass'>↑145</span>",
            "<span  class='colorGrass'>↑143</span>",
          ],
          [
            "刘昊然",
            "实验一中",
            "<span  class='colorGrass'>↑694</span>",
            "<span  class='colorGrass'>↑187</span>",
            "<span  class='colorGrass'>↑64</span>",
          ],
          [
            "何书年",
            "汇文中学",
            "<span  class='colorGrass'>↑5595</span>",
            "<span  class='colorGrass'>↑225</span>",
            "<span  class='colorGrass'>↑75</span>",
          ],
          [
            "卢强东",
            "实验一中",
            "<span  class='colorGrass'>↑7563</span>",
            "<span  class='colorGrass'>↑215</span>",
            "<span  class='colorGrass'>↑72</span>",
          ],
          [
            "贺子悦",
            "实验一中",
            "<span  class='colorGrass'>↑4684</span>",
            "<span  class='colorGrass'>↑153</span>",
            "<span  class='colorGrass'>↑65</span>",
          ],
          [
            "李嘉豪",
            "实验一中",
            "<span  class='colorRed'>↓8646</span>",
            "<span  class='colorGrass'>↑175</span>",
            "<span  class='colorGrass'>↑45</span>",
          ],
          [
            "龚雪天",
            "回民中学",
            "<span  class='colorRed'>↓4513</span>",
            "<span  class='colorGrass'>↑18675</span>",
            "<span  class='colorGrass'>↑87</span>",
          ],
          [
            "穆思田",
            "育才学校",
            "<span  class='colorGrass'>↑3576</span>",
            "<span  class='colorGrass'>↑169</span>",
            "<span  class='colorGrass'>↑97</span>",
          ],
          [
            "李民浩",
            "实验一中",
            "<span  class='colorGrass'>↑7575</span>",
            "<span  class='colorGrass'>↑177</span>",
            "<span  class='colorGrass'>↑86</span>",
          ],
          [
            "崔晓之",
            "育才学校",
            "<span  class='colorRed'>↓7533</span>",
            "<span  class='colorGrass'>↑193</span>",
            "<span  class='colorGrass'>78</span>",
          ],
          [
            "黄颖一",
            "实验一中",
            "<span  class='colorGrass'>↑7100</span>",
            "<span  class='colorGrass'>↑180</span>",
            "<span  class='colorGrass'>↑56</span>",
          ],
          [
            "刘昊然",
            "实验一中",
            "<span  class='colorGrass'>↑4594</span>",
            "<span  class='colorGrass'>↑187</span>",
            "<span  class='colorGrass'>↑87</span>",
          ],
          [
            "何书年",
            "汇文中学",
            "<span  class='colorGrass'>↑3595</span>",
            "<span  class='colorGrass'>↑170</span>",
            "<span  class='colorGrass'>↑65</span>",
          ],
          [
            "卢强东",
            "实验一中",
            "<span  class='colorGrass'>↑4563</span>",
            "<span  class='colorGrass'>↑167</span>",
            "<span  class='colorGrass'>↑98</span>",
          ],
          [
            "贺子悦",
            "实验一中",
            "<span  class='colorGrass'>↑7684</span>",
            "<span  class='colorGrass'>↑203</span>",
            "<span  class='colorGrass'>↑87</span>",
          ],
          [
            "李嘉豪",
            "实验一中",
            "<span  class='colorRed'>↓9846</span>",
            "<span  class='colorGrass'>↑274</span>",
            "<span  class='colorGrass'>↑73</span>",
          ],
          [
            "龚雪天",
            "回民中学",
            "<span  class='colorRed'>↓6713</span>",
            "<span  class='colorGrass'>↑218</span>",
            "<span  class='colorGrass'>↑79</span>",
          ],
          [
            "穆思田",
            "育才学校",
            "<span  class='colorGrass'>↑6576</span>",
            "<span  class='colorGrass'>↑137</span>",
            "<span  class='colorGrass'>↑45</span>",
          ],
        ],
        rowNum: 10, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      first: {
        id: 23,
        name: "刘文君",
        avatarUrl: "./images/girl.png",
        rank: 1,
        value: 8273,
      },
      second: {
        id: 24,
        name: "崔晶晶",
        avatarUrl: "./images/girl.png",
        rank: 2,
        value: 7353,
      },
      third: {
        id: 25,
        name: "王文超",
        avatarUrl: "./images/boy.png",
        rank: 3,
        value: 5673,
      },
      i: 0,
      data: [
        { name: "跳绳数量", index: 0 },
        { name: "最高跳速", index: 1 },
        { name: "最多连跳", index: 2 },
      ],
      timer: null, // 定时器
      durationIndex: 0,
      durationArray: [
        { name: "今日数据", index: 0 },
        { name: "累计数据", index: 1 },
      ],
      durationTimer: null,
    };
  },
  components: {},
  mounted() {
    // this.getData();
    // 指标循环
    this.timer = setInterval(() => {
      this.i += 1;

      if (this.i > 2) {
        this.i = 0; // 循环
      }
      this.getData();
    }, 5000);
    // 时间范围循环
    this.durationTimer = setInterval(() => {
      this.durationIndex += 1;
      if (this.durationIndex > 1) {
        this.durationIndex = 0; // 循环
      }
    }, 100000);
  },

  // 销毁定时器
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
    clearInterval(this.durationTimer);
    this.durationTimer = null;
  },
  methods: {
    // 更新数据
    getData() {
      console.log("get data");

      // set(config, datas);
      if (this.durationIndex == 0) {
        // 今日数据
        if (this.i == 0) {
          // 跳绳次数
          let datas = {
            data: [
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
              [
                "李民浩",
                "男",
                "实验一中",
                "七一班",
                "<span  class='colorGrass'>7325</span>",
              ],
            ],
            rowNum: 10, //表格行数
            headerHeight: 35,
            headerBGC: "#0f1325", //表头
            oddRowBGC: "#0f1325", //奇数行
            evenRowBGC: "#171c33", //偶数行
            index: true,
            columnWidth: [50],
            align: ["center"],
          };
          let first = {
            id: 23,
            name: "李博源",
            avatarUrl: "./images/girl.png",
            rank: 1,
            value: 8273,
          };
          let second = {
            id: 24,
            name: "毛艾琳",
            avatarUrl: "./images/girl.png",
            rank: 2,
            value: 7353,
          };
          let third = {
            id: 25,
            name: "钟梓期",
            avatarUrl: "./images/boy.png",
            rank: 3,
            value: 5673,
          };
          this.config = datas;
          this.first = first;
          this.second = second;
          this.third = third;
        } else if (this.i == 1) {
          // 最高跳速
        } else if (this.i == 2) {
          // 最多连跳
        }
      } else if (this.durationIndex == 1) {
        // 累计数据
      }
    },
    // 指标tab
    tab(index) {
      this.i = index;
    },
    // 时间范围tab
    durationTab(index) {
      this.durationIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
$box-height: 800px;
$box-width: 500px;
#playerRank {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 470px;
      height: 600px;
    }
  }
}
.top3 {
  width: 90%;
  // height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: rgb(52 152 100);
}

.top3-items {
  width: 80%;
  margin-left: 10%;
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
