<!-- 购买机票：机票列表页 -->
<template>
  <div>
    <div>
      <bread-crumb></bread-crumb>
    </div>
    <div class="headerInfo">
      <div class="headerNav">
        <p>出发航班</p>
        <p>{{flInfo.originplace}} > {{flInfo.destination}}</p>
        <div class="headerList">
          <ul class="headerUl">
            <li
              :class="index==idx?'show':''"
              v-for="(item,index) of list"
              @click="borderShow(item,index)"
              :key="index"
            >
              <div>{{item.date}}</div>
              <div>{{item.title}}</div>
              <div>{{item.count}}</div>
            </li>
          </ul>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div class="tipstitle">
      <p>单人价格，包含运费、税费、附加费和适用的服务费。</p>
      <p>一旦获得预订编号，即可确保票价。</p>
      <p>票价以四舍五入后的货币单位显示。</p>
      <p>
        <span class="green"></span> 所选舱等最优票价
      </p>
    </div>
    <div class="listitem">
      <list-item
        v-on:listitemtofather="listitemtofather1"
        :listitems="listitems"
        :flInfo="flInfo"
        v-if="aginReset"
      ></list-item>
    </div>

    <div class="backlistitem" v-if="flInfo.ticket==2">
      <div class="headerInfo">
        <div class="headerNav mb-5">
          <p>返程航班</p>
          <p>{{flInfo.destination}} > {{flInfo.originplace}}</p>
          <div class="headerList">
            <ul class="headerUl">
              <li
                :class="index==idx2?'show':''"
                v-for="(item,index) of list2"
                @click="borderShow2(item,index)"
                :key="index"
              >
                <div>{{item.date}}</div>
                <div>{{item.title}}</div>
                <div>{{item.count}}</div>
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
        </div>
      </div>
      <list-item
        v-on:listitemtofather="listitemtofather2"
        :listitems="listitems"
        v-if="aginReset2"
      ></list-item>
    </div>
    <div class="traveldigest">
      <travel-digest :params="{flInfo,flParams1,flParams2}"></travel-digest>
    </div>
    <!-- <div class="line"></div>       -->
    <div class="btns">
      <div class="btn1" @click="back">
        <a href="javascript:;">上一页</a>
      </div>
      <div class="btn2" @click="next">
        <a href="javascript:;">预定</a>
      </div>
    </div>
  </div>
</template>
<script src="../js/flightList.js"></script>
<style src="../assets/css/flightList.css" scoped></style>