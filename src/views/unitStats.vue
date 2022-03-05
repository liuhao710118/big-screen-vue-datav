<template>
  <div id="unitStats">
    <div class="d-flex pt-2 pl-2">
      <span>
        <icon name="chart-line" class="text-icon"></icon>
      </span>
      <div class="d-flex">
        <span class="fs-xl text mx-2">运动（实时）数据列表</span>
      </div>
    </div>
    <div class="unit-box" :id="scrollId">
      <vue-seamless-scroll
        class="seamless-warp"
        v-for="(item, index) of sportData"
        :key="index"
      >
        <realSport :unitStat="item" />
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import realSport from "@/components/echart/realSport/realSport";
export default {
  data() {
    return {
      sportData: [
        {
          orgName: "育才中学初三一班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 463.3,
          image:
            "https://p3.itc.cn/q_70/images03/20201022/777bc964045949cf908ef1d080e95bb7.jpeg",
        },
        {
          orgName: "实验中学初三一班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 1434.5,
          image:
            "./images/realSport.jpeg",
        },
        {
          orgName: "育才中学初三七班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 873.9,
          image:
            "https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/43a7d933c895d143ae4c0cf078f082025aaf072e.jpg",
        },
        {
          orgName: "汇文中学初三一班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 683.1,
          image:
            "https://tse1-mm.cn.bing.net/th/id/R-C.a94ec0f66e6acf1b04e5772bd7b03ee4?rik=Uo%2bfzSVHOMRa%2fQ&riu=http%3a%2f%2fstatic.bjshijinshi.com%2fimg%2f247CC3C4-0EA5-4F94-ABB0-606FD7426640.png%2fw_800&ehk=T8aa7PTby61xXUzReTJfUIdTxk0iHkhJiXKl1FHlUx8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        },
        {
          orgName: "育才中学初三七班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 873.9,
          image:
            "https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/43a7d933c895d143ae4c0cf078f082025aaf072e.jpg",
        },
        {
          orgName: "育才中学初三七班",
          duration: "32:42",
          date: "2022-03-23",
          playerNum: 43,
          value: 873.9,
          image:
            "https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/43a7d933c895d143ae4c0cf078f082025aaf072e.jpg",
        },
      ],
      scrollTimer: null, // 滚动定时器
      pauseTimer: null, // 暂停定时器
      scrollId: "scrollId", // 滚动容器id
      scrollDirection: "up", // 滚动方向 up向上 down向下
    };
  },
  components: {
    realSport,
  },
  destroyed() {
    // 清理定时器
    clearTimeout(this.pauseTimer);
    this.pauseTimer = null;
    clearInterval(this.scrollTimer);
    this.scrollTimer = null;
    // 清理点击监听
    window.document.removeEventListener("click", this.pauseScroll);
  },
  mounted() {
    this.dataCompleteFun();
  },
  methods: {
    // 数据加载完成方法
    dataCompleteFun() {
      // 开启滚动
      this.autoScroll();
    },
    autoScroll() {
      const scrollHeight = document.getElementById(this.scrollId).scrollHeight;
      const clientHeight = document.getElementById(this.scrollId).clientHeight;
      const scroll = scrollHeight - clientHeight;
      // 滚动长度为0
      if (scroll === 0) {
        return;
      }
      // 触发滚动方法
      this.scrollFun();
      // 去除点击监听
      window.document.removeEventListener("click", this.pauseScroll);
      // 重设点击监听
      window.document.addEventListener("click", this.pauseScroll, false);
    },
    pauseScroll() {
      // 定时器不为空
      if (this.scrollTimer) {
        // 清除定时器
        clearInterval(this.scrollTimer);
        this.scrollTimer = null;
        // 一秒钟后重新开始定时器
        this.pauseTimer = setTimeout(() => {
          this.scrollFun();
        }, 2000);
      }
    },
    scrollFun() {
      // 如果定时器存在
      if (this.scrollTimer) {
        // 则先清除
        clearInterval(this.scrollTimer);
        this.scrollTimer = null;
      }
      this.scrollTimer = setInterval(() => {
        const scrollHeight = document.getElementById(
          this.scrollId
        ).scrollHeight;
        const clientHeight = document.getElementById(
          this.scrollId
        ).clientHeight;
        const scroll = scrollHeight - clientHeight;
        // 获取当前滚动条距离顶部高度
        const scrollTop = document.getElementById(this.scrollId).scrollTop;
        // 向下滚动
        if (this.scrollDirection === "down") {
          const temp = scrollTop + 1;
          document.getElementById(this.scrollId).scrollTop = temp; // 滚动
          // 距离顶部高度  大于等于 滚动长度
          if (scroll <= temp) {
            // 滚动到底部 停止定时器
            clearInterval(this.scrollTimer);
            this.scrollTimer = null;
            // 改变方向
            this.scrollDirection = "up";
            // 一秒后重开定时器
            setTimeout(() => {
              this.scrollFun();
            }, 1000);
          }
          // 向上滚动
        } else if (this.scrollDirection === "up") {
          const temp = scrollTop - 0.5;
          document.getElementById(this.scrollId).scrollTop = temp; // 滚动
          // 距离顶部高度  小于等于 0
          if (temp <= 0) {
            // 滚动到底部 停止定时器
            clearInterval(this.scrollTimer);
            this.scrollTimer = null;
            // 改变方向
            this.scrollDirection = "down";
            // 一秒后重开定时器
            setTimeout(() => {
              this.scrollFun();
            }, 1000);
          }
        }
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 900px;

#unitStats {
  padding: 16px;
  height: $box-height;
  // width: $box-width;
  .unit-box {
    border-radius: 10px;
    overflow: hidden;
    height: 800px;
    overflow-y: scroll;
    white-space: nowrap;
    .seamless-warp {
      height: 200px;
      overflow: hidden;
    }
  }
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
