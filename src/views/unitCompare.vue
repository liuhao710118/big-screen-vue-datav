<template>
  <div id="unitCompare">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">团队数据对比</span>
        </div>
      </div>
      <div>
        <compare />
      </div>
    </div>
  </div>
</template>

<script>
import compare from '@/components/echart/compare'
export default {
  components: {
    compare
  }
}
</script>

<style lang="scss" scoped>
$box-height: 440px;
$box-width: 100%;
#unitCompare {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 35px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 150px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
