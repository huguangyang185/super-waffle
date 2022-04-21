<template>
    <div class="Sign_contract_box">
        <!-- ------------  填写签约信息  ---------------- -->
        <!-- 返回  选择家庭成员 -->
        <div class="header_back">
            <van-icon name="arrow-left"  />
            <p>选择家庭成员</p>
            <span>&nbsp</span>
        </div>

        <!-- 签约信息 -->
        <div class="contract_message"> 签约信息 </div>

        <!-- 添加签约信息 -->
        <div class="add_family">

            <!-- 签约机构 -->
            <div class="add_family_item">
                <p class="left">签约机构</p>
                <p class="right">
                    <input type="text" placeholder="洛西社区卫生服务站">
                    <small> > </small>
                </p>
            </div>

                <!-- 签约团队 -->
                <div class="add_family_item">
                    <p class="left">签约团队</p>
                    <p class="right">
                        <input type="text" placeholder="李明明团队">
                        <small> > </small>
                    </p>
                </div>

                 <!-- 签约医生 -->
                <div class="add_family_item">
                    <p class="left">签约医生</p>
                    <p class="right">
                        <input type="text" placeholder="李明明">
                        <small> > </small>
                    </p>
                </div>

                  <!-- 服务包 -->
                <div class="add_family_item">
                    <p class="left">服务包</p>
                    <p class="right">
                        <input type="text" placeholder="老年服务包">
                 
                    </p>
                </div>

                  <!-- 签约周期 -->
                <div class="add_family_item">
                    <p class="left">签约周期</p>
                    <p class="right">
                        <input type="text" placeholder="1年">
                 
                    </p>
                </div>

                <!-- 生效日期 -->
                <div class="add_family_item">
                    <p class="left">生效日期</p>
                    <p class="right">
                        <input type="text" placeholder="2020年09月01日">
                        <small> > </small>
                    </p>
                </div>

                <!-- 费用 -->
                <div class="add_family_item">
                    <p class="left">费用</p>
                    <p class="right">
                        <input type="text" class="price" placeholder="￥120">
                        
                    </p>
                </div>

                <!-- 备注 -->
                <div class="add_family_item">
                    <p class="left">备注</p>
                    <p class="right">
                        <!-- <input type="text" placeholder="2020年09月01日"> -->
                        <!-- <small> > </small> -->
                        <textarea cols="30" rows="3" placeholder="请填写备注"></textarea>
                    </p>
                </div>



        </div>


         <!-- 最下面的提交 -->
    <div class="xiayibu">
      <div class="bottom">提交</div>
    </div>


    </div>
</template>

<style lang="scss" scoped>
.Sign_contract_box {
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

  // 字母
  .contract_message {
    // line-height: 50px;
    font-size: 20px;
    padding: 30px 20px 20px;
    background-color: #f7fafd;
  }

  // 添加签约信息
  .add_family {
    background-color: #fff;
    padding:0 20px 100px 20px;
  

    .add_family_item {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      font-size: 16px;
      //   height: 50px;
      padding: 15px 0;
      //   align-items: center;
      border-bottom: 0.1px solid #e9e9e9;
      .left {
        width: 100px;
      }
      .right {
        flex: 1;
        input {
          border: none;
        }
        // 价格
        .price {
          color: #fa746b;
        }
        small {
          float: right;
        }
        textarea {
          box-sizing: border-box;
          background-color: #f2f2f2;
          color: rgb(80, 79, 79);
          padding: 10px 20px;
          border-radius: 10px;
        }
      }
    }
  }

  // 最下面的下一步
  .xiayibu {
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #e9e9e9;
    .bottom {
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
