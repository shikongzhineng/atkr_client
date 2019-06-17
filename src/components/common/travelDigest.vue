<template>
<div class="main">
  <div class="digesttext"><img class="leftTopImg" src="../../assets/traveldigest/zhaiyao.png" alt="">旅行摘要</div>
  <div class="digestlist">
    <!-- 去程航班信息 -->
    <div class="listGoText">
      <h5>您的去程航班</h5>
      <span class="statusText">FLEX</span>
      <div class="destination">{{sap1}}>{{tap1}}</div>
      <div class="timing"><span>出发:</span>{{startdate}} {{ystime1}}</div>
      <div class="timing"><span>到达:</span>{{startdate}} {{yetime1}}</div>
      <!-- <div class="timing"><span>转机:</span> 上海,巴黎</div> -->
    </div>
    <div class="borderRight" v-show="ticket==2"></div>
     <!-- 返程航班信息  -->
    <div class="listBackText" v-show="ticket==2">
        <h5>您的返程航班</h5>
        <span class="statusText">STANDARD</span>
        <div class="destination">{{sap2}}>{{tap2}}</div>
        <div class="timing"><span>出发:</span>{{backdate}} {{ystime2}}</div>
        <div class="timing"><span>到达:</span>{{backdate}} {{yetime2}}</div>
        <!-- <div class="timing"><span>转机:</span> 巴黎</div> -->
    </div>
    <div class="borderRight"></div>
    <!-- 人数和时间 -->
    <div class="peoAndTime">
      <div>乘客人数</div>
      <div>
        <img style="width:20px;margin-right:8px;" src="../../assets/traveldigest/people.png" alt="">{{passnum}} 人
      </div>
      <div>持续时间</div>
      <div>
        <img style="width:20px;margin-right:8px;" src="../../assets/traveldigest/time.png" alt="">{{ticket==1?1:totalday()}} 天
      </div>
    </div>
    <div class="borderRight"></div>
    <!-- 价格总计 -->
    <div class="title">
      <div>含税价格总计：</div>
      <div>￥{{totalprice()}}.00 元</div>
    </div>
  </div>
</div>
</template>  
<script>
export default {
  data() {
    return {      
    // totalday:0,
    // totalmoney:0
    }
  },
  props:[
    "ticket",//单程1 往返2

    "ystime1",//出发时间
    "yetime1",//到达时间
    "sap1",//出发地址+机场
    "tap1",//到达地址+机场
    "time1",//时长
    // "price1",//经济舱价格
    // "vprice1",//商务舱价格
    "chooseprice1",

    "ystime2",//回程 出发时间
    "yetime2",//回程 到达时间    
    "sap2",//出发地址+机场
    "tap2",//到达地址+机场  
    "time2",//回程 时长
    // "price2",//回程 经济舱价格
    // "vprice2",//回程 商务舱价格
    "chooseprice2",

    "originplace",//出发地址 回程相反
    "destination",//到达地址
    "startdate",//出发日期
    "backdate",//回程日期
    "passnum",//乘客人数



    ],
    // watch:{
    //   chooseprice1(){
    //     this.totalday = this.gettotalday();
    //     this.totalmoney = this.gettotalmoney();
    //   },
    //   chooseprice2(){
    //     this.totalday = this.gettotalday();
    //     this.totalmoney = this.gettotalmoney();
    //   }
    // },
    methods:{
      totalday(){
        if(this.ticket == 1){
          return 1;
        }else{
          var date1 = new Date(this.startdate).getTime();          
          var date2 = new Date(this.backdate).getTime();
          var len = date2 - date1;
          len = Math.floor(len/(24*60*60*1000));
          return len;
        }
        
      },
      totalprice(){
        if(this.ticket == 1){
          return this.chooseprice1*this.passnum;
        }else{
          return (Number(this.chooseprice1)+Number(this.chooseprice2))*this.passnum;
        }
      }
    },
    created(){
    console.log(this.chooseprice1+"---"+this.chooseprice2+"---"+this.passnum);

    },
  mounted(){
    // console.log(
    //   this.ticket,
    //   this.originplace,
    //   this.destination,
    //   this.startdate,
    //   this.backdate,
    //   this.passnum,
    //   this.ystime1,
    //   this.yetime1,
    //   this.sap,
    //   this.tap,
    //   this.time1,
    //   this.price1,
    //   this.vprice1);
  }
}
</script>
<style scoped>
.leftTopImg{
  width: 45px;
  margin: 1.5rem 1.3rem;
}
.digesttext{
  font-size: 1.5rem;
  font-weight: 700;
}
/* 左边框线 */
.borderRight{
  border-right:0.1rem solid #bdbdbd;
}
/* 摘要详细信息 */
.digestlist{
  background-color: #dff2fd;
  color:#051039;
  box-shadow: 0 0.5rem 1rem 0 #e8e5e5;
  cursor: pointer;
  width: 100%;
  position: static;
  padding:2rem 0;
  display: flex;
  justify-content: space-around;
}
.listGoText,.listBackText{
  padding:0 2rem 0 4rem;
  max-width: 18.75rem;
}
.statusText{
  background-color: #0062e6;
  color:#fff;
  font-weight: 700;
  padding:0.3rem 0.75rem;
  display: inline-block;
  margin-bottom: 0.75rem;
}
.destination{
  color:#dc0000;
  font-weight: 700;
  font-size: 1.3rem;
}
.timing>span{
  font-weight:bolder;
  margin-bottom: 10px;
}
.peoAndTime{
  padding:0 2rem;
}
.peoAndTime div{
  margin:0.5rem 0;
}
.title{
  vertical-align: middle;
  padding-right:4rem;
  color: #051039;
}
.title>div{
  font-size: 1.3rem;
  font-weight: bolder;
}
</style>