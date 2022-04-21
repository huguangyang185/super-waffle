<template>
    <div class="contract_management_box">
        <!-- --------------   签约管理   ------------------- -->
        <!-- 返回   -->
        <div class="header_back">
            <i class="iconfont icon-fanhui1"></i>
            <p>签约管理</p>
            <span>&nbsp</span>
        </div>

        <!-- 顶部tab -->
        <van-tabs v-model="active">
            <van-tab title="全部">1</van-tab>
            <van-tab title="待审核">待审核</van-tab>
            <van-tab title="待支付">待支付</van-tab>
            <van-tab title="生效中">生效中</van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang="scss" scoped>
.contract_management_box {
  height: 100%;
  background-color: #f7fafd;

  // 返回
  .header_back {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
  }
}
</style>

