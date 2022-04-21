<template>
  <div class="home">
    <!-- 顶部个人信息头像 二维码 -->
    <header>
      <div class="left">
        <img src="../assets/logo.png" alt="">
        <h5>王明伟医生</h5>
      </div>
      <div class="right">
        <img src="../assets/logo.png" alt="">
      </div>
    </header>

    <!-- 绿色 已签约人数 -->
    <div class="people_counting">

      <div class="counting_item">
        <small>已签约人数</small>
        <b>1000</b>
      </div>

      <div class="counting_item">
        <small>待签约人数</small>
        <b>20</b>
      </div>

      <div class="counting_item">
        <small>居民总数</small>
        <b>1020</b>
      </div>

      <div class="counting_item">
        <small>待处理服务量</small>
        <b>10</b>
      </div>

      <div class="counting_item">
        <small>服务总量</small>
        <b>100</b>
      </div>

      <div class="counting_item">
        <small>服务评价</small>
        <b>4.9</b>
      </div>


      <!-- 新建档案 -->
      <div class="shortcut">

        <div class="shortcut_item" @click="toAbout">
          <img src="../assets/logo.png" alt="">
          <p>新建档案</p>
        </div>

        <div class="shortcut_item">
          <img src="../assets/logo.png" alt="">
          <p>签约管理</p>
        </div>

        <div class="shortcut_item">
          <img src="../assets/logo.png" alt="">
          <p>服务管理</p>
        </div>

      </div>

    </div>

      <!-- 签约申请 -->
      <div class="sign_contract">
        <div class="contract_header">
          <div class="left">签约申请（3）</div>
          <div class="right">查看全部 > </div>
        </div>

        <div class="sign_contract_item">
          <!-- 名字 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="daishnehe">待审核</div>
          </div>

          <!-- 身份证号 -->
          <div class="identity_card">
            <p class="name">身份证号</p>
            <p>345222********0423</p>
          </div>
            <!-- 签约团队 -->
           <div class="identity_card">
            <p class="name">签约团队</p>
            <p>李明明团队</p>
          </div>

          <!-- 服务包 -->
           <div class="identity_card">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
        </div>
      </div>

      <!-- 服务申请 -->
      <div class="type_service ">
        <div class="contract_header">
          <div class="left">服务申请（8）</div>
          <div class="right">查看全部 > </div>
        </div>

        <div class="sign_contract_item">
          <!-- 名字 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">待审核</div>
          </div>

          <!-- 服务包 -->
          <div class="identity_card">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
            <!-- 服务项目 -->
           <div class="identity_card">
            <p class="name">服务项目</p>
            <p>高血压健康随访</p>
          </div>

          <!-- 申请时间 -->
           <div class="identity_card">
            <p class="name">申请时间</p>
            <p>2020/09/09 10:09:09</p>
          </div>
        </div>
      </div>
      

      <!-- 底部导航 tabbar -->
      <van-tabbar v-model="active" class="tabber" active-color="#59dab3" >
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">居民</van-tabbar-item>
        <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
      </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return { active: 0 };
  },
  methods: {
    toAbout(){
       this.$router.push('/about')
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  
  box-sizing: border-box;
  height: 100%;
  padding: 0 20px;

  // 顶部个人信息头像 二维码
  header {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height: 80px;
    align-items: center;
    img {
      width: 40px;
    }
    .left {
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        background-color: aquamarine;
        margin-right: 10px;
      }
    }
  }

  // 人数
  .people_counting {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    background-color: #4dd5b1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 30px 30px 120px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .counting_item {
      width: 27%;
      margin-bottom: 20px;
      small {
        display: block;
        color: rgba(255, 255, 255, 0.822);
        font-size: 12px;
      }
      b {
        display: block;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
      }
    }

    // 新建档案
    .shortcut {
      position: absolute;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      padding: 20px 30px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;

      .shortcut_item {
        img {
          width: 50px;
          border-radius: 15px;
          background-color: bisque;
        }
        p {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }

  // 签约申请   // 服务申请
  .sign_contract,.type_service {
    border-top: 10px solid #f1f0f081;
    background-color: #fff;
    padding-bottom: 20px;

    .contract_header {
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      .left {
        font-size: 20px;
      }
      .right {
        color: rgba(129, 127, 127, 0.8);
        font-size: 14px;
      }
    }

    .sign_contract_item {
      border: 0.1px solid #e9e9e9;
      padding: 30px 20px;
      border-radius: 10px;
      margin-bottom: 10px;
      // 名字
      .name_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name_box_left {
          display: flex;
          align-items: center;
          .name {
            width: 80px;
            font-size: 20px;
          }
          .age {
            // margin-left: 15px;
            color: rgb(83, 83, 83);
          }
          img {
            width: 20px;
            margin-left: 15px;
          }
          .jigou {
            padding: 2px 4px;
            border-radius: 5px;
            background-color: #e2e4fd;
            color: #7a83f5;
            margin-left: 15px;
          }
        }

        .daishnehe {
          color: #fa746b;
          font-size: 14px;
          float: right;
        }
      }

      // 身份证号
      .identity_card {
        display: flex;
        margin-top: 20px;
        align-items: center;
        font-size: 15px;
        .name {
          width: 80px;
        }
      }
    }
  }

  // 服务申请
  .type_service{
    padding-bottom: 80px;
  }

  // tabber
  .tabber{
    height: 70px;
    background-color: #fff;
    border-top: 0.1px solid #e9e9e9;
  }
}
</style>

