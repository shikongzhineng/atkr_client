<template>
  <div class="main">
    <div class="breadCrumb">
      <div class="breadnav">
        <ul class="breadUl">
          <li class="first">
            <a href="#">您的旅行</a>
          </li>
          <li class="first">时刻表与价格</li>
          <li class="current">旅行详情</li>
          <li>个人信息</li>
          <li>付款</li>
        </ul>
      </div>
    </div>
    <div id="headerInfo">
      <div class="headerNav">
        <p>航程说明</p>
        <div style="clear: both;"></div>
      </div>
    </div>
    <table></table>
    <div class="travelList">
      <div class="row" v-for="(item,index) of lists" :key="index">
        <div class="col-8">
          <div class="row">
            <div class="col-4">
              <img
                class="titleImg"
                :src="require(`../assets/img/traveldigest/${item.titleimg}`)"
                alt
              />
              <span>{{item.title}}</span>
            </div>
            <div class="col-8">
              <span class="spanNav">{{item.detail}}</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img class="isTrue" :src="require(`../assets/img/traveldigest/${item.istrueimg}`)" alt />
          <div>{{item.explain}}</div>
        </div>
      </div>
    </div>
    <div class="traveldigest">
      <traveldigest :params="{flInfo,flParams1,flParams2}"></traveldigest>
    </div>

    <div class="btns">
      <div class="btn1" @click="back">
        <a href="javascript:;">上一页</a>
      </div>
      <div class="btn2" @click="next">
        <a href="javascript:;">确认</a>
      </div>
    </div>
  </div>
</template>
<style src="../assets/css/travelDetail.css" scoped></style>
<script src="../js/travelDetail.js"></script>




