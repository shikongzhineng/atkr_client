<!-- 首页轮播图组件 -->
<template>
  <div class="block">
    <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="(item,i) in banners" :key="i">
        <div class="ban">
          <img id="img" :src="item.img" alt />
          <div class="card">
            <span>{{item.span1}}</span>
            <span v-html="item.span2"></span>
            <div>
              <img src="img/index/arrow.png" alt />
              <a href="javascript:;" @click="jump(selectUrl(i))">{{item.a}}</a>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script src='../js/carousel.js'></script>
<style scoped>
/*轮播图片和小卡片*/
.ban {
  position: relative;
}
.ban > #img {
  /*轮播图大小*/
  width: 100%;
}
.card {
  width: 35%;
  height: 40%;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 30%;
  left: 30%;
  color: #051039;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  padding-left: 15px;
}
.card > span {
  display: block;
  padding: 1% 0;
}
.card > span:first-child {
  font-size: 1.4rem;
  font-weight: 700;
}
.card > div {
  margin-top: 5%;
}
.card > div > img {
  width: 20px;
  height: 20px;
}
.card > div > a {
  width: 50px;
  color: #051039;
}
.card > div > a:hover {
  color: #f00;
  text-decoration: none;
}
</style>