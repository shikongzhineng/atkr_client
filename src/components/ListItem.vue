<template>
  <div class="containers">
    <table class="flight_list">
      <thead>
        <tr>
          <td style="width:50%;">
            <img
              src="../assets/img/traveldigest/plane.png"
              style="width:50px;margin-right:1rem;"
              alt
            />
            直航航班
          </td>
          <td style colspan="3">
            <div class="sort_weapper">
              <div class="sort">
                <span class="t1_label">以该方式筛选并显示：</span>
                <div class="switch_container">
                  <span
                    class="switch"
                    :class="idx==index?'a':''"
                    v-for="(item,index) of navList"
                    :key="index"
                    @click="switchContainer(index)"
                  >
                    <a href="javascript:;">{{item}}</a>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </thead>
      <tbody v-if="!haveflight" style="border:1px solid #ddd;">
        <tr>
          <td colspan="3" style="padding:20px 100px;">未查到所选日期航班，请重新选择日期！</td>
        </tr>
      </tbody>
      <tbody class="list_item" v-if="haveflight">
        <tr v-for="(listitem,indexs) of listitems" :key="indexs">
          <td style>
            <div class="time_left">
              <div>
                <span>{{listitem.ystime}}</span>
                {{flInfo.originplace}}
                <br />
                {{listitem.sap}}
              </div>
              <div>
                <span>{{listitem.yetime}}</span>
                {{flInfo.destination}}
                <br />
                {{listitem.tap}}
              </div>
            </div>
            <div class="time_right">
              <div>
                旅行时长：
                <span>
                  <br />
                  {{listitem.ytime}}
                </span>
              </div>
              <!-- <div>转机： <span>巴黎</span></div> -->
            </div>
          </td>
          <td style="width:24%;" class="secondTd" @click="choose(indexs,1)">
            <div class="price">
              <span class="fake_radio">
                <div :class="idxs==indexs&&isChoose1?'circle':''"></div>
              </span>
              <span>￥{{listitem.price}}.00</span>
              <div>此等票价，还剩下2个座位</div>
            </div>
          </td>
          <td style="width:24%;" class="secondTd" @click="choose(indexs,2)">
            <div class="price">
              <span class="fake_radio">
                <div :class="idxs==indexs&&isChoose2?'circle':''"></div>
              </span>
              <span>￥{{listitem.vprice}}.00</span>
              <div>此等票价，还剩下2个座位</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="../js/listItem.js"></script>
<style src="../assets/css/listItem.css" scoped></style>


