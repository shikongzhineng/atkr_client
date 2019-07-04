<template>
<div class="breadCrumb">
  <div class="breadnav">
    <ul class="breadUl">
      <li class="first">
        <a href="#">您的旅行</a>
      </li>
      <li class="current">时刻表与价格</li>
      <li>旅行详情</li>
      <li>个人信息</li>
      <li>付款</li>
    </ul>
  </div>
</div>
</template>
<style scoped>
.breadCrumb{
  border-top: 1px solid #e8e5e5;
  background-image:linear-gradient(to right,#051039 40%,#fff 40%);
  border-bottom: 1px solid #e8e5e5;
  margin-bottom: 2rem;
}
.breadnav{
  display: table;
  width: 100%;
  border-collapse: collapse;
  border: none;
}
.breadUl{
  list-style: none;
  padding:0 8rem;
  display: flex;
  justify-content: space-around;
  margin:0;
}
.breadUl li{
  float: left;
  font-weight: 600;
  padding:0 5rem;
  color:#767676;
  padding:1rem 0;
}
.first{
  background-color:#051039;
}
.first a{
  color:#fff;
}
.current{
  color:#fff !important;
  background-color: #ed0000;
  position: relative;
  padding:1rem 8rem 1rem 8rem !important;
}
.current::before,.current::after{
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
}
.current::before{
  border-right: 3.5rem solid transparent;
  border-top:3.5rem solid #051039;
  left: 0;
}
.current::after{
  border-left:3.5rem solid transparent;
  border-bottom: 3.5rem solid #fff;
  right:0;
}
</style>
<script>
  export default {
    data() {
      return {
        
      }
    },
  }
</script>