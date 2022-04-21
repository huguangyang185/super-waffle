<template>
    <div class="resultBox">
        <!-- --------------   结果   ------------------- -->
        <!-- 返回  选择家庭成员 -->
        <div class="header_back">
            <van-icon name="arrow-left"  />
            <p>结果</p>
            <span>&nbsp</span>
        </div>

        <!-- 对号 图标 -->
        <div class="icon" ><i class="iconfont icon-duihao2"></i> </div>

        <!-- 提交成功 -->
        <div class="succeed">提交成功，等待居民支付</div>

        <!-- 签约信息 -->
        <div class="sign">签约信息已提交，居民支付后可完成签约</div>

        <!-- 按钮 -->
        <div class="btn sign_btn">查看签约进度</div>
        <div class="btn back_btn">返回首页</div>


    </div>
</template>

<style lang="scss" scoped>
.resultBox {
  height: 100%;
  background-color: #f7fafd;

  // 返回  新建居民档案
  .header_back {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
  }

  //   对号 图标
  .icon {
    padding: 60px 0 20px;
    text-align: center;
    .icon-duihao2 {
      font-size: 60px;
      color: #46d5b2;
    }
  }

  //   提交成功
  .succeed {
    text-align: center;
    line-height: 60px;
    // background-color: #46d5b2;
    font-size: 20px;
  }

  //   签约信息
  .sign {
    text-align: center;
    // line-height: 60px;
    // background-color: #46d5b2;
    font-size: 15px;
    color: #999999;
  }

  // 按钮
  .btn {
    width: 90%;
    line-height: 50px;
    border-radius: 10px;
    text-align: center;
    margin: 30px auto;
    box-sizing: border-box;
    font-size: 18px;
  }
  .sign_btn{
      background-color: #46d5b2;
      color: #fff;
  }
  .back_btn{
      
      background-color: #fff;
      color: #46d5b2;
      border: 2px solid #ccc;
  }
}
</style>

