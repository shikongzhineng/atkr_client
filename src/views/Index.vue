<template>
  <div>
    <!-- 轮播图 -->
    <carousel></carousel>
    <div class="main">
      <!-- 热门线路 -->
      <div class="hottitle">———— 热门航线 ————</div>
      <div class="hot">
        <el-row :gutter="30">
          <el-col :span="6" v-for="(item,i) of hotFlight" :key="i">
            <div class="el-card" @click="search(i)">
              <img :src="item.img" alt />
              <span class="adr">{{item.start}} - {{item.end}}</span>
              <span>{{item.info}}</span>
              <span>{{item.price}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script src="../js/index.js"></script>
<style src="../assets/css/index.css" lang="css" scoped></style>