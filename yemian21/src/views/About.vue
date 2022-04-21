<template>
  <div class="about">
    <!-- 返回  新建居民档案 -->
    <div class="header_back">
      <van-icon name="arrow-left" @click="$router.back()" />
      <p>新建居民档案</p>
      <span>&nbsp</span>
    </div>

    <!-- 居民基本信息 -->
    <div class="juminxinxi">居民基本信息</div>

    <!-- 填写信息 -->
    <div class="tianxiexinxi">
      <!-- 真实姓名 -->
      <div class="xinxi_item">
        <p>真实姓名<span>*</span></p>
        <input type="text" placeholder="请填写居民的真实姓名">
      </div>
      <div class="xinxi_item">
        <p>身份证号<span>*</span></p>
        <input type="text" placeholder="请填写居民的身份证号">
      </div>
      <div class="xinxi_item">
        <p>性别<span>*</span></p>
        <div><input type="text" placeholder="请填写居民的身份证号"> <span> > </span> </div>
      </div>
      <div class="xinxi_item">
        <p>出生日期<span>*</span></p>
        <div><input type="text" placeholder="请填写居民的出生日期"> <span> > </span> </div>
      </div>

      <!-- 手机号码 -->
      <div class="xinxi_item">
        <p>手机号码<span>*</span></p>
       <input type="text" placeholder="请填写居民的手机号码">
      </div>

      <div class="xinxi_item">
        <p>登录密码<span>*</span></p>
       <input type="text" placeholder="8位以上的数字和字母组合">
      </div>

      <div class="xinxi_item  dianjudi">
        <p>现居地</p>
       <input type="text" placeholder="请填写现居地">
      </div>

      <!-- 居民标签 -->
      <div class="juminbiaoqian">
        <div class="juminbiaoqian_top">
          <p>居民标签</p>
          <input type="text" placeholder="点击选择居民标签">
        </div>

        <div class="xuanze">
          <div class="item">高血压</div>
          <div class="item">冠心病</div>
          <div class="item">高血糖</div>
          <div class="item">高血脂</div>
          <div class="item">高血压</div>
          <div class="item">冠心病</div>
          <div class="item">高血糖</div>
          <div class="item">高血脂</div>
        </div>
        

      </div>

      <!-- 关联家人 -->
      <div class="xinxi_item">
        <p>关联家人</p>
       <div><input type="text" placeholder="请填写居民家人信息"> <span> > </span> </div>
      </div>
      <!-- 立即签约 -->
      <div class="  dianjudi  bom">
        <p>立即签约</p>
       <van-switch class="kaiguan" v-model="checked" />
      </div>

    </div>

    
    <!-- 最下面的下一步 -->
    <div class="xiayibu">
      <div class="bottom">下一步</div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  
  // padding: 0 20px;
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

  // 居民基本信息
  .juminxinxi {
    background-color: #f7fafd;
    font-size: 20px;
    line-height: 80px;
    padding: 0 20px;
  }

  // 填写信息
  .tianxiexinxi {
    padding: 20px;
    background-color: #fff;

    .xinxi_item {
      display: flex;
      border-bottom: 0.1px solid #e9e9e9;
      height: 44px;
      align-items: center;
      p {
        width: 110px;
        font-weight: normal;
        span {
          color: #fa746b;
        }
      }
      input,
      div {
        flex: 1;
        font-size: 13px;
        border: none;
        color: #ccc;
        display: flex;
        justify-content: space-between;
      }
    }

    // 立即签约
    .dianjudi {
      border-bottom: none;
      display: flex;
      height: 44px;
      justify-content: space-between;
      align-items: center;
      p {
        width: 110px;
        font-weight: normal;
      }
    }
    // 最下面的立即签约
      .bom{
        border-bottom: 50px solid #f4f9fb;
      }

    // 居民标签
    .juminbiaoqian {
      border-top: 10px solid #f7fafd;

      border-bottom: 10px solid #f7fafd;

      .juminbiaoqian_top {
        display: flex;
        border-bottom: 0.1px solid #e9e9e9;
        height: 44px;
        align-items: center;
        p {
          width: 110px;
          font-weight: normal;
        }
        input {
          flex: 1;
          font-size: 13px;
          border: none;
          color: #ccc;
          display: flex;
          justify-content: space-between;
        }
      }
      // 选择
      .xuanze {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 10px;
        .item {
          padding: 5px 10px;
          border-radius: 10px;
          border: 2px solid #e9e9e9;
          margin-bottom: 15px;
        }
      }
    }
  }

    // 最下面的下一步
    .xiayibu{
      position: fixed;
      width: 100%;
      height: 70px;
      left: 0;
      bottom: 0;
      background-color: #fff;
      border-top: 1px solid #e9e9e9;
      .bottom{
        width: 80%;
        text-align: center;
        color: #fff;
        background-color: #40d4aa;
        border-radius: 10px;
        line-height: 50px;
        margin: 10px auto;
      }
    }


}
</style>
