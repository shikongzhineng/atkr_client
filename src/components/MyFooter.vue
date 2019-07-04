<template>
  <div class="footer">
    <el-row class="main">
        <el-col :span="5">
          <div class="title">客户服务</div>
          <div>
            <a href="javascript:;">联系我们</a>
          </div>
          <div>
            <a href="javascript:;">行李托运</a>
          </div>
          <div>
            <a href="javascript:;">投诉与建议</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="title">网上购买须知</div>
          <div>
            <a href="javascript:;">服务条款</a>
          </div>
          <div>
            <a href="javascript:;">网上预订</a>
          </div>
          <div>
            <a href="javascript:;">运输条件</a>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="title">关注天航</div>
          <div>
            <a href="javascript:;">机上购物</a>
          </div>
          <div>
            <a href="javascript:;">夏航周报</a>
          </div>
          <div>
            <a href="javascript:;">夏航杂谈</a>
          </div>
          <div>
            <a href="javascript:;">媒体报道</a>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="title">航线</div>
          <div>
            <a href="javascript:;">夏航航班</a>
          </div>
          <div>
            <a href="javascript:;">通航城市</a>
          </div>
          <div>
            <a href="javascript:;">隐私和法律声明</a>
          </div>
          <div>
            <a href="javascript:;">服务协议</a>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="title">联系方式</div>
          <div>
            <a href="javascript:;">客服热线：010-8886-2899</a>
          </div>
          <div>
            <a href="javascript:;">周一至周日 9:00-18:00</a>
          </div>
          <div>
            <a href="javascript:;">微信公众号</a>
          </div>
        </el-col>
    </el-row>
    <div class="icp">
      <p>今目标版权所有 京ICP证120422号 京公海网安备110108001962号</p>
    </div>
  </div>
</template>
<style scoped>
.footer {
  margin-top: 50px;
  background-color: #294a92;
  color: #051039;
  width: 100%;
  font-size: 1.1rem;
  padding-bottom: 30px;
}
.footer .main {
  margin: 0 auto;
  padding-top: 50px;
  width: 1000px;
}
.footer .icp {
  text-align: center;
}
.footer .title {
  color: #ddd;
  font-weight: bold;
  margin-bottom: 5px;
}
.footer .el-col {
  line-height: 2.6;
}
.footer .el-col a {
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
}
.footer a:hover {
  color: #f9594d;
}
</style>