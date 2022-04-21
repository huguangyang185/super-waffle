<template>
    <div class="bigBox">
        <!-- -----------------   关联家人  ------------------- -->

        <!-- 返回 -->
        <div class="header_back">
            <van-icon name="arrow-left" />
            <p>关联家人</p>
            <span class="right">完成</span>
        </div>

        <!-- 家人信息 -->
        <div class="family">家人信息</div>

        <!-- 添加家人信息 -->
        <div class="add_family">
            <div class="add_family_item">
                <p class="left">选择家人</p>
                <p class="right">
                    <input type="text" placeholder="请选择该居民家人信息">
                    <small> > </small>
                </p>

            </div>
                <div class="add_family_item">
                <p class="left">与本人关系</p>
                <p class="right">
                    <input type="text" placeholder="请选择家人与该居民关系">
                    <small> > </small>
                </p>
                </div>

        </div>

        <!-- 新增关联家人 -->
        <div class="newly">+新增关联家人</div>

    </div>  
</template>

<style lang="scss" scoped>
.bigBox {
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

    .right {
      color: #4bd7ae;
    }
  }

  //   家人信息
  .family {
    background-color: #f7fafd;
    color: rgb(77, 75, 75);
    font-size: 14px;
    padding: 30px 20px 20px;
  }

  //   添加家人信息
  .add_family {
    background-color: #fff;
    padding: 0 20px;
    .add_family_item {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      font-size: 16px;
      height: 50px;
      align-items: center;
      border-bottom: 0.1px solid #e9e9e9;
      .left {
        width: 100px;
      }
      .right {
        flex: 1;
        input {
          border: none;
        }
        small {
          float: right;
        }
      }
    }
  }

  //   新增关联家人
  .newly {
    font-size: 16px;
    color: #4bd7ae;
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
}
</style>

