<template>
<div id="footer">
  <ul>
    <li>
      <div class="footer-title">客户服务</div>
      <div><a href="javascript:;">联系我们</a></div>
      <div><a href="javascript:;">天堂航空</a></div>
      <div><a href="javascript:;">行李和意识物品服务</a></div>
      <div><a href="javascript:;">投诉与建议</a></div>
      <div><a href="javascript:;">行动不便的乘客</a></div>
    </li>
    <li>
      <div class="footer-title">网上购买须知</div>
      <div><a href="javascript:;">条款</a></div>
      <div><a href="javascript:;">网上预订</a></div>
      <div><a href="javascript:;">运输总条件</a></div>
    </li>
    <li>
      <div class="footer-title">关注天航</div>
      <div><a href="javascript:;">机上购物</a></div>
      <div><a href="javascript:;">天航周报</a></div>
      <div><a href="javascript:;">天航杂谈</a></div>
      <div><a href="javascript:;">媒体报道</a></div>
    </li>
    <li>
      <div class="footer-title">航线</div>
      <div><a href="javascript:;">天航航班</a></div>
      <div><a href="javascript:;">目的地概览</a></div>
      <div><a href="javascript:;">全部航班</a></div>
      <div><a href="javascript:;">隐私和法律声明</a></div>
      <div><a href="javascript:;">服务协议</a></div>
    </li>
    <li>
      <div class="footer-title">联系方式</div>
      <div><a href="javascript:;">客服热线：010-8886-2899</a></div>
      <div><a href="javascript:;">周一至周日 9:00-18:00</a></div>
      <div><a href="javascript:;">微信公众号</a></div>
    </li>
  </ul>
  <div>
    <p>今目标版权所有   京ICP证120422号   京公海网安备110108001962号</p>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style scope>
  #footer{
    margin-top:50px;
  background-color: #294a92;
  color:#051039;
  width: 100%;
  font-size: 1.1rem;
}
#footer>ul{
  margin: 0 auto;
  list-style: none;
  padding:60px 0 40px;
  width:1000px;
}
#footer>ul::after{
  content:"";
  display: block;
  clear: both;
}
#footer>ul>li>.footer-title{
  color:#ddd;
  font-weight: bold;
  margin-bottom: 5px;
}
#footer>ul>li{
  float: left;
  line-height: 2.6;
  margin: 0 0 0 70px;
}
#footer>ul>li a{
  text-decoration: none;
  color:#fff;
  transition: 0.5s;
}
#footer>ul>li a:hover{
  color: #f9594d;
}
#footer>div{
  text-align: center;
  padding-bottom: 30px;
}

</style>