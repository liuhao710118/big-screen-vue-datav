<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          "清华附中",
          "北大附中",
          "实验中学",
          "一中",
          "二中",
          "育才学校",
          "汇文中学",
          "回民中学",
          "外国语中学",
          "四中",
          "区实验",
          "三中"
        ],
        lineData: [
          1809,
          2028,
          4045,
          2348,
          2808,
          3097,
          3867,
          4715,
          4844,
          5415,
          5061,
          2677
        ],
        barData: [
          160,
          150,
          159,
          140,
          175,
          130,
          140,
          100,
          140,
          150,
          172,
          149
        ]
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    // this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    // setData () {
    //   for (let i = 0; i < this.cdata.barData.length -1; i++) {
    //     let rate = this.cdata.barData[i] / this.cdata.lineData[i];
    //     // this.cdata.rateData.push(rate.toFixed(2));
    //   }
    // },
  }
};
</script>

<style lang="scss" scoped>
</style>