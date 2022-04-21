<template>
   <div class="family_member_box">
        <!-- --------------   选择家庭成员   ------------------- -->

        <!-- 返回  选择家庭成员 -->
        <div class="header_back">
            <van-icon name="arrow-left"  />
            <p>选择家庭成员</p>
            <span>&nbsp</span>
        </div>

        <!-- 字母 -->
        <div class="letter"> A </div>

        <!-- 个人信息 -->
        <div class="personal_information">
           <img src="../../assets/logo.png" alt="">
           <section>
              <div class="top">
                 <span class="name">王嫣然</span>
                 <small class="age">26岁</small>
              </div>
              <div class="bom">
                 <div class="bom_item huang">低血糖</div>
                 <div class="bom_item fen">劲椎病</div>
              </div>
           </section>
        </div>

        <div class="personal_information">
           <img src="../../assets/logo.png" alt="">
           <section>
              <div class="top">
                 <span class="name">王梦</span>
                 <small class="age">58岁</small>
              </div>
              <div class="bom">
                 <div class="bom_item zi">高血压</div>
              </div>
           </section>
        </div>


        <!-- B -->
        <!-- 字母 -->
        <div class="letter"> B </div>

        <!-- 个人信息 -->
        <div class="personal_information">
           <img src="../../assets/logo.png" alt="">
           <section>
              <div class="top">
                 <span class="name">王嫣然</span>
                 <small class="age">26岁</small>
              </div>
              <div class="bom">
                 <div class="bom_item huang">低血糖</div>
                 <div class="bom_item fen">劲椎病</div>
              </div>
           </section>
        </div>


    </div> 
</template>

<style lang="scss" scoped>
.family_member_box {
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

  // 字母
  .letter {
    line-height: 50px;
    font-size: 15px;
    padding: 0 20px;
    background-color: #f7fafd;
  }

  // 个人信息
  .personal_information {
     display: flex;
     align-items: center;
     border-top: 0.1px solid #e9e9e9;
     border-bottom: 0.1px solid #e9e9e9;
     background-color: #fff;
     padding: 20px;
     img{
        width: 50px;
        background-color: antiquewhite;
        border-radius: 50%;
        margin-right: 15px;
     }
     
     section{
        .top{
           display: flex;
            align-items: center;
            margin-bottom: 15px;
           .name{
              font-size: 20px;
           }
           .age{
              color: rgb(88, 88, 88);
              font-size:14px;
              margin: 0 15px;
           }
        }
        .bom{
           display: flex;
        }

        .bom_item{
           padding: 4px 9px;
           border-radius: 7px;
           background-color: aquamarine;
           font-size: 14px;
           margin-right: 15px;
        }

      //   低血糖
      .huang{
         background-color: #fff8e4;
         color: #fddd80;
      }

      // 劲椎病
      .fen{
         background-color: #fff1f0;
         color: #fa7970;
      }

      // 高血压
      .zi{
         background-color: #f1f2fe;
         color: #838cf5;
      }
     }
  }
}
</style>
