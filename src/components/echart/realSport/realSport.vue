<template>
  <div id="realSport">
    <div class="bg-color-black">
      <!-- title -->
      <div class="title d-flex pt-2 pl-2">
        <div class="title-left">
          <span>
            <icon name="chart-bar" class="text-icon"></icon>
          </span>
          <div class="d-flex">
            <span class="fs-xl text mx-2">{{ data.orgName }}</span>
          </div>
        </div>
        <span class="fs-xl text mx-2">{{ data.date }}</span>
      </div>
      <div class="item-box d-flex jc-center">
        <div class="item-left">
          <div class="item-left-line">
            <span>运动时长</span>
            <span class="ml-3 colorBlue fw-b fs-xl" style="font-size: 30px">{{
              data.duration
            }}</span>
          </div>
          <div class="item-left-line">
            <span>人均跳绳</span>
            <span class="colorGrass ml-3 fw-b fs-xl" style="font-size: 32px">{{ data.value }}</span>
          </div>
          <div class="item-left-line">
            <span>运动人数</span>
            <span class="ml-3 colorBlue fw-b fs-xl" style="font-size: 30px">{{
              data.playerNum
            }}</span>
          </div>
        </div>
        <div class="item-right">
          <img
            class="item-right-img"
            :src="data.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CenterLeft1Chart from "@/components/echart/centerLeft/centerLeft1Chart";
export default {
	props: {
    unitStat: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      data: {
        orgName: "育才学校七三班",
        duration: "32:42",
        date: "2022-03-23",
        playerNum: 43,
        value: 463.3,
        image:""
      },
    };
  },

  mounted() {
		this.data = this.unitStat;
		console.log('this unitStat is',this.unitStat);
	},
  methods: {},
};
</script>

<style lang="scss" scoped>
$box-width: 500px;
$box-height: 200px;

#realSport {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
    padding: 10px;
    .title {
      width: 100%;
      height: 20px;
      align-items: center;
      justify-content: space-between;
      .title-left {
        width: 70%;
        display: flex;
        align-items: flex-start;
      }
    }
    .item-box {
      display: flex;
      .item-left {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
        margin-top: 20px;
        // padding: 20px;
        .item-left-line {
          width: 100%;
          height: max-content;
          display: flex;
          align-items: center;
        }
      }
      .item-right {
        width: 40%;
        .item-right-img {
          width: 100%;
        }
      }
    }
  }
  .text {
    color: #c3cbde;
  }
}
</style>
