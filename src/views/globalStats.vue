<template>
  <div id="globalStats">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop ml-1 mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1 pl-3">1分钟计时跳排行榜</span>
        <dv-scroll-ranking-board
          class="dv-scr-rank-board mt-1"
          :config="ranking"
        />
      </div>
      <div class="percent bg-color-black">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1 pl-3">家庭作业数据统计</span>
        <div class="item">
          <span>人均完成率</span>
          <CenterChart
            :id="rate[0].id"
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData"
          />
          <span>家庭作业：2000个/周</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from "@/components/echart/center/centerChartRate";

export default {
  data() {
    return {
      titleItem: [
        {
          title: "累计运动人数",
          number: {
            number: [4512],
            toFixed: 0,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "今日运动人数",
          number: {
            number: [418],
            toFixed: 0,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "实时运动人数",
          number: {
            number: [42],
            toFixed: 0,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "人均累计跳绳（个）",
          number: {
            number: [15144.3],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "人均最多连跳（个）",
          number: {
            number: [206.6],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "人均最高跳速（个/分钟）",
          number: {
            number: [164.0],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
      ],
      ranking: {
        data: [
          {
            name: "实验中学",
            value: 155,
          },
          {
            name: "一中",
            value: 120,
          },
          {
            name: "育才学校",
            value: 178,
          },
          {
            name: "汇文中学",
            value: 166,
          },
          {
            name: "群英中学",
            value: 150,
          },
          {
            name: "二中",
            value: 140,
          },
          {
            name: "实验二中",
            value: 109,
          },
          {
            name: "外国语中学",
            value: 148,
          },
          {
            name: "清华附中",
            value: 153,
          },
          {
            name: "北大附中",
            value: 162,
          },
        ],
        carousel: "single",
        unit: "个/分钟",
      },
      water: {
        data: [24, 45],
        shape: "roundRect",
        formatter: "{value}%",
        waveNum: 3,
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: "centerRate1",
          tips: 60,
          colorData: {
            textStyle: "#3fc0fb",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#03a9f4",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          id: "centerRate2",
          tips: 40,
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
      ],
    };
  },
  components: {
    CenterChart,
  },
};
</script>

<style lang="scss" scoped>
#globalStats {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 280px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 59%;
      .dv-scr-rank-board {
        height: 225px;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      padding: 10px;
      flex-wrap: wrap;
      .item {
        width: 100%;
        height: 180px;
        align-items: center;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
