<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">个人数据排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ['姓名', '学校', '跳绳数量','最高跳速','最多连跳'],
        data: [
          ['李民浩', '实验一中', "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['崔晓之', '育才学校', "<span  class='colorRed'>↓33%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['黄颖一', '实验一中', "<span  class='colorGrass'>↑100%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['刘昊然', '实验一中', "<span  class='colorGrass'>↑94%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['何书年', '汇文中学', "<span  class='colorGrass'>↑95%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['卢强东', '实验一中', "<span  class='colorGrass'>↑63%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['贺子悦', '实验一中', "<span  class='colorGrass'>↑84%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['李嘉豪', '实验一中', "<span  class='colorRed'>↓46%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['龚雪天', '回民中学', "<span  class='colorRed'>↓13%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['穆思田', '育才学校', "<span  class='colorGrass'>↑76%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['李民浩', '实验一中', "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['崔晓之', '育才学校', "<span  class='colorRed'>↓33%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['黄颖一', '实验一中', "<span  class='colorGrass'>↑100%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['刘昊然', '实验一中', "<span  class='colorGrass'>↑94%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['何书年', '汇文中学', "<span  class='colorGrass'>↑95%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['卢强东', '实验一中', "<span  class='colorGrass'>↑63%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['贺子悦', '实验一中', "<span  class='colorGrass'>↑84%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['李嘉豪', '实验一中', "<span  class='colorRed'>↓46%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['龚雪天', '回民中学', "<span  class='colorRed'>↓13%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"],
          ['穆思田', '育才学校', "<span  class='colorGrass'>↑76%</span>", "<span  class='colorGrass'>↑75%</span>", "<span  class='colorGrass'>↑75%</span>"]
        ],
        rowNum: 15, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$box-height: 910px;
$box-width: 500px;
#centerRight1 {
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
      height: 800px;
    }
  }
}
</style>
