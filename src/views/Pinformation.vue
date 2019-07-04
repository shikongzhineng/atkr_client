<template>
  <div class="main">
    <div class="digesttext">
      <img class="leftTopImg" src="../assets/traveldigest/zhaiyao.png" alt>
      订单信息
    </div>
    <div v-for="(elm,key) of list" :key="key" class="digestlist">
      <!-- 去程航班信息 -->
      <div class="listGoText">
        <h5>航班信息</h5>
        <span class="statusText">FLEX</span>
        <div class="destination">{{elm.saddr}}>{{elm.taddr}}</div>
        <div class="timing">
          <span>出发:</span>
          {{elm.sap}} {{elm.ystime}}
        </div>
        <div class="timing">
          <span>到达:</span>{{elm.tap}} {{elm.yetime}}
        </div>
        <!-- <div class="timing"><span>转机:</span> 上海,巴黎</div> -->
      </div>

      <div class="borderRight"></div>
      <!-- 人数和时间 -->
      <div class="peoAndTime">
        <div>
          <span class="ss">姓名：</span>
          {{elm.name}}
          <span class="ss ml-5">身份证号：</span>
          {{elm.id}}
        </div>

        <div>
          <span class="ss">性别：</span>
          {{elm.gender==0?'女':'男'}}
          <span class="ss ml-5">订票时间：</span>
          {{elm.stime}}
        </div>

        <div>
          <span class="ss">手机号：</span>
          {{elm.phone}}
        </div>

        <div>
          <span class="ss">订单号：</span>{{elm.tkn}}
        </div>
      </div>
      <div class="borderRight"></div>
      <!-- 价格总计 -->
      <div class="title">
        <div>含税价格总计：</div>
        <div>￥{{elm.price}}元</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "",
          gender: "",
          id: "",
          stime: "",
          phone: "",
          sap: "",
          tap: "",
          yetime: "",
          ystime: "",
          yetime: "",
          tkn:'',
          price: ""
        }
      ]
    };
  },
  created() {
    this.axios.get("/pltk/query").then(res => {
      console.log(111);
      console.log(res.data);
      this.list = res.data.data;
    });
  }
};
</script>
<style scoped>
.leftTopImg {
  width: 45px;
  margin: 1.5rem 1.3rem;
}
.digesttext {
  font-size: 1.5rem;
  font-weight: 700;
}
/* 左边框线 */
.borderRight {
  border-right: 0.1rem solid #bdbdbd;
}
/* 摘要详细信息 */
.digestlist {
  background-color: #dff2fd;
  color: #051039;
  box-shadow: 0 0.5rem 1rem 0 #e8e5e5;
  cursor: pointer;
  width: 100%;
  position: static;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
}
.listGoText,
.listBackText {
  padding: 0 2rem 0 4rem;
  max-width: 18.75rem;
}
.statusText {
  background-color: #0062e6;
  color: #fff;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  display: inline-block;
  margin-bottom: 0.75rem;
}
.destination {
  color: #dc0000;
  font-weight: 700;
  font-size: 1.3rem;
}
.timing > span {
  font-weight: bolder;
  margin-bottom: 10px;
}
.peoAndTime {
  padding: 0 2rem;
}
.peoAndTime div {
  margin: 0.5rem 0;
}
.title {
  vertical-align: middle;
  padding-right: 4rem;
  color: #051039;
}
.title > div {
  font-size: 1.3rem;
  font-weight: bolder;
}
.ss {
  font-size: 1.1rem;
  font-weight: 700 !important;
}
</style>