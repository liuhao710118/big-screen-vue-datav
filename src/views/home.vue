<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">运动数据在线管理平台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">西城区教体局</span>
            </div>
            <!-- <div class="react-right ml-3">
              <span class="text">数据分析2</span>
            </div> -->
          </div>
          <div class="d-flex aside-width">
            <!-- <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">实时直播</span>
            </div> -->
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">跳绳数据统计</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 数据 -->
          <div class="left-box">
            <div>
              <dv-border-box-13>
                <unitStats />
              </dv-border-box-13>
            </div>
          </div>
          <div class="center-box">
            <div class="center-top-box">
              <div>
                <globalStats />
              </div>
            </div>
            <div class="center-bottom-box">
              <dv-border-box-12>
                <unitCompare />
              </dv-border-box-12>
            </div>
          </div>
          <div class="right-box">
            <dv-border-box-13>
              <!-- <top3 class="react-right-top"/> -->
              <!-- <playerRank  class="react-right-bottom"/> -->
              <playerRank/>
            </dv-border-box-13>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from "../utils/index.js";
import playerRank from "./playerRank";
import globalStats from "./globalStats";
import unitCompare from './unitCompare'
import unitStats from './unitStats'
// import top3 from './top3'
export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    unitStats,
    playerRank,
    globalStats,
    unitCompare,
    // top3
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/home.scss";
</style>
