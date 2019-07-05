<template>
  <div class="main">
    <div class="digesttext">
      <img class="leftTopImg" src="../assets/img/traveldigest/zhaiyao.png" alt />旅行摘要
    </div>
    <div class="digestlist">
      <!-- 去程航班信息 -->
      <div class="listGoText">
        <h5>您的去程航班</h5>
        <span class="statusText">FLEX</span>
        <div class="destination">{{flParams1.sap}}>{{flParams1.tap}}</div>
        <div class="timing">
          <span>出发:</span>
          {{flInfo.startdate}} {{flParams1.ystime}}
        </div>
        <div class="timing">
          <span>到达:</span>
          {{flInfo.startdate}} {{flParams1.yetime}}
        </div>
        <!-- <div class="timing"><span>转机:</span> 上海,巴黎</div> -->
      </div>
      <div class="borderRight" v-show="flInfo.ticket==2"></div>
      <!-- 返程航班信息  -->
      <div class="listBackText" v-show="flInfo.ticket==2">
        <h5>您的返程航班</h5>
        <span class="statusText">STANDARD</span>
        <div class="destination">{{flParams2.sap}}>{{flParams2.tap}}</div>
        <div class="timing">
          <span>出发:</span>
          {{flInfo.backdate}} {{flParams2.ystime}}
        </div>
        <div class="timing">
          <span>到达:</span>
          {{flInfo.backdate}} {{flParams2.yetime}}
        </div>
        <!-- <div class="timing"><span>转机:</span> 巴黎</div> -->
      </div>
      <div class="borderRight"></div>
      <!-- 人数和时间 -->
      <div class="peoAndTime">
        <div>乘客人数</div>
        <div>
          <img style="width:20px;margin-right:8px;" src="../assets/img/traveldigest/people.png" alt />
          {{flInfo.passnum}} 人
        </div>
        <div>持续时间</div>
        <div>
          <img style="width:20px;margin-right:8px;" src="../assets/img/traveldigest/time.png" alt />
          {{flInfo.ticket==1?1:totalday}} 天
        </div>
      </div>
      <div class="borderRight"></div>
      <!-- 价格总计 -->
      <div class="title">
        <div>含税价格总计：</div>
        <div>￥{{totalprice}}.00 元</div>
      </div>
    </div>
  </div>
</template>  
<script src="../js/travelDigest.js"></script>
<style src="../assets/css/travelDigest.css" scoped></style>