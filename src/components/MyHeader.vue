<template>
  <div>
    <div class="header">
      <a href="javescript:;">
        <img src="../assets/img/planelogo.png" />
      </a>
      <div class="right" v-show="isLogin==='false'">
        <div class="tz">
          <a href="javescript:;">
            <img src="../assets/img/lingdang.png" />
          </a>
        </div>
        <div class="border"></div>
        <div class="log" @click="tologin">
          <img src="../assets/img/denglu.png" />
          <a href="javescript:;">登录账户</a>
        </div>
        <div class="border"></div>
        <div class="reg" @click="toreg">
          <img src="../assets/img/zhuce.png" />
          <a href="javescript:;">注册账户</a>
        </div>
      </div>
      <div class="login" v-show="isLogin===true">
        <div class="tz">
          <a href="javescript:;">
            <img src="../assets/img/lingdang.png" />
          </a>
        </div>
        <div class="log">
          <img src="../assets/img/denglu.png" />
          <a href="javescript:;" @click="gopinfo">您的账户</a>
          <a href="javescript:;" class="ml-2" @click="logout">注销</a>
        </div>
      </div>
    </div>
    <div class="nav">
      <router-link :to="{path:'/index'}">
        <div class="nav-item">首页</div>
      </router-link>
      <router-link :to="{path:'/searchflight'}">
        <div class="nav-item">查询航班</div>
      </router-link>
      <router-link :to="{path:'/pinformation'}">
        <div class="nav-item">我的订单</div>
      </router-link>
    </div>
  </div>
</template>
<script src="../js/myHeader.js"></script>
<style src="../assets/css/myHeader.css" lang="css" scoped></style>