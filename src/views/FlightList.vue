<!-- 购买机票：机票列表页 -->
<template>
<div>
  <div>
    <breadcrumb></breadcrumb>
  </div>
  <div class="headerInfo">
    <div class="headerNav">
      <p>出发航班</p>
      <p>{{originplace}} > {{destination}}</p>
      <div class="headerList">
        <ul class="headerUl">
          <li :class="index==idx?'show':''" v-for="(item,index) of list" @click="borderShow(item,index)" :key="index">
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
    <p><span class="green"></span> 所选舱等最优票价</p>
  </div>
  <div class="listitem">
    <listitem v-on:listitemtofather="listitemtofather1" :originplace="originplace" :destination="destination" :startdate="startdate" v-if="aginReset"></listitem>
  </div>

  <div class="backlistitem" v-if="ticket==2">
    <div class="headerInfo">
      <div class="headerNav mb-5">
        <p>返程航班</p>
        <p>{{destination}} > {{originplace}}</p>
        <div class="headerList">
          <ul class="headerUl">
            <li :class="index==idx2?'show':''" v-for="(item,index) of list2" @click="borderShow2(item,index)" :key="index">
              <div>{{item.date}}</div>
              <div>{{item.title}}</div>
              <div>{{item.count}}</div>
            </li>
          </ul>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <listitem v-on:listitemtofather="listitemtofather2" :originplace="destination" :destination="originplace" :startdate="backdate" v-if="aginReset2"></listitem>
  </div>
  <div class="traveldigest">
    <traveldigest
    :ticket="ticket"    
    :originplace="originplace"
    :destination="destination"
    :startdate="startdate" 
    :backdate="backdate" 
    :passnum="passnum" 

    :ystime1="ystime1" 
    :yetime1="yetime1" 
    :sap1="sap1"
    :tap1="tap1"
    :ytime1="ytime1"
    :chooseprice1="chooseprice1"   

    :ystime2="ystime2"
    :yetime2="yetime2"  
    :sap2="sap2"
    :tap2="tap2"
    :ytime2="ytime2"    
    :chooseprice2="chooseprice2"
    ></traveldigest>
    
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
<script>
import breadcrumb from './common/breadCrumb.vue';
import listitem from './common/listItem.vue';
import traveldigest from './common/travelDigest.vue';
  export default {
    data() {
      return {
        list:[
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7701"},
          {date:"",time:"",title:"起价",count:"￥ 7702"},
        ],
        list2:[
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7701"},
          {date:"",time:"",title:"起价",count:"$ 7702"},
        ],
        idx:3,
        idx2:3,
        day:["日","一","二","三","四","五","六"],
        aginReset:true,
        aginReset2:true,

        ticket:1,
        originplace:"",
        destination:"",
        startdate:"",
        backdate:"",
        passnum:0,

        ystime1:"",
        yetime1:"",
        sap1:"",
        tap1:"",
        ytime1:"",
        chooseprice1:0,
        fid1:0,

        ystime2:"",
        yetime2:"",
        sap2:"",
        tap2:"",
        ytime2:"", 
        chooseprice2:0,
        fid2:0,

      }
    },
    
    //从searchFlight跳转过来的url参数列表
    //http://127.0.0.1:8080/#/flightList/ticket=1&originplace=北京&destination=广州&startdate=2019-06-01&backdate=2019-07-01&passnum=5
    //props:["ticket","originplace","destination","startdate","backdate","passnum"],
    methods: {
      listitemtofather1:function(ystime,yetime,sap,tap,ytime,chooseprice,fid){
              this.ystime1=ystime;
              this.yetime1=yetime;
              this.sap1=sap;
              this.tap1=tap;
              this.ytime1=ytime;
              this.chooseprice1=chooseprice;
              this.fid1 = fid;
      },
      listitemtofather2:function(ystime,yetime,sap,tap,ytime,chooseprice,fid){
              this.ystime2=ystime;
              this.yetime2=yetime;
              this.sap2=sap;
              this.tap2=tap;
              this.ytime2=ytime;
              this.chooseprice2=chooseprice;
              this.fid2 = fid;
      },
      back(){
        this.$router.push("/searchflight");
      },
      next(){
        if(this.ystime1 == ""){
          alert("请选择去程航班");
          return ;
        }
        if(this.ticket == 2 && this.ystime2 == ""){
          alert("请选择回程航班");
          return ;
        }
        this.$router.push({path:"/traveldetail",query:{
          ticket:this.ticket,          
          originplace:this.originplace,
          destination:this.destination,
          startdate:this.startdate,
          backdate:this.backdate,
          passnum:this.passnum,

          ystime1:this.ystime1,
          yetime1:this.yetime1,
          sap1:this.sap1,
          tap1:this.tap1,
          ytime2:this.ytime1,
          chooseprice1:this.chooseprice1,
          fid1:this.fid1,

          ystime2:this.ystime2,
          yetime2:this.yetime2,
          sap2:this.sap2,
          tap2:this.tap2,
          ytime2:this.ytime2,
          chooseprice2:this.chooseprice2,
          fid2:this.fid2    
          }
        });
      },
      borderShow(item,index){
        this.idx=index;
        this.startdate = this.list[index].time;
        console.log(this.startdate);        
        this.aginReset = false;    
        this.$nextTick(()=>{
          this.aginReset = true;          
        })   
      },
      borderShow2(item,index){
        this.idx2=index;
        this.backdate = this.list2[index].time;
        console.log(this.backdate);
        this.aginReset2 = false;    
        this.$nextTick(()=>{
          this.aginReset2 = true;          
        })   
      },
      load(){
        //console.log(this.originplace+"--"+this.destination+"--"+this.startdate);
        //根据传过来的起始日期展示前后3天，总共7天的日期卡片
        var today = new Date().toLocaleDateString();
        today = new Date(`${today} 08:00:00`).getTime();
        var startdate = new Date(this.startdate).toLocaleDateString();
        startdate = new Date(`${startdate} 08:00:00`).getTime();
        console.log(today+"=="+startdate);
        var sub = Math.abs(startdate - today);
        sub = Math.floor(sub/(24*60*60*1000));
        //console.log("sub1="+sub);
        if(sub <7){
          this.idx = sub;
        }else{
          this.idx = 3;
        }
        var date = new Date(this.startdate).getTime()-this.idx*1000*60*60*24;
        for(var i = 0;i < 7;i++){
          var tem = new Date(date);
          //console.log("tem="+tem.toLocaleDateString());
          this.list[i].date = tem.getMonth()+1+"月"+tem.getDate()+"日  星期"+
            this.day[tem.getDay()];
          tem = tem.toLocaleDateString();          
          tem = tem.replace(/\//g,'-');//把/替换成-
          tem = tem.replace(/-([0-9])-/g,'-0$1-');//把月份和日期中一位数字前面加0
          tem = tem.replace(/-([0-9])$/g,'-0$1');
          this.list[i].time = tem;
          date += 1000*60*60*24;
          console.log(this.list[i].time);
        }
        if(this.ticket == 2){
          //根据传过来的返程日期展示前后3天，总共7天的日期卡片
          //var today = new Date().toLocaleDateString();
          //today = new Date(`${today} 08:00:00`).getTime();
          var backdate = new Date(this.backdate).toLocaleDateString();
          backdate = new Date(`${backdate} 08:00:00`).getTime();
          console.log(today+"=="+backdate);
          var sub = Math.abs(backdate - today);
          sub = Math.floor(sub/(24*60*60*1000));
          //console.log("sub2="+sub);
          if(sub <7){
            this.idx2 = sub;
          }else{
            this.idx2 = 3;
          }
          var date2 = new Date(this.backdate).getTime()-this.idx2*1000*60*60*24;
          for(var i = 0;i < 7;i++){
            var tem = new Date(date2);
            //console.log("tem="+tem.toLocaleDateString());
            this.list2[i].date = tem.getMonth()+1+"月"+tem.getDate()+"日  星期"+
              this.day[tem.getDay()];
            tem = tem.toLocaleDateString();          
            tem = tem.replace(/\//g,'-');//把/替换成-
            tem = tem.replace(/-([0-9])-/g,'-0$1-');//把月份和日期中一位数字前面加0
            tem = tem.replace(/-([0-9])$/g,'-0$1');
            this.list2[i].time = tem;
            date2 += 1000*60*60*24;
            console.log(this.list2[i].time);
          }
        }
        
      },
    },
    components:{
      "breadcrumb":breadcrumb,
      "listitem":listitem,
      traveldigest,
    },
    created(){     
        this.ticket = this.$route.query.ticket;
        this.originplace = this.$route.query.originplace;
        this.destination = this.$route.query.destination;
        this.startdate = this.$route.query.startdate;
        this.backdate = this.$route.query.backdate;
        this.passnum = this.$route.query.passnum;

        this.load();    
        
    },
    mounted(){ 
      // var today = (new Date()).toLocaleDateString();
      // var startdate = new Date(`${this.startdate} 08:00:00`).toLocaleDateString();
      // console.log(today+" "+startdate);
      // if(startdate == today){
      //   this.idx = 0;
      // }
        //this.listitemtofather();  
        //console.log(this.chooseprice1+"==="+this.chooseprice2);
    }
  }
</script>

<style scoped>
.headerInfo{
  padding-top:2rem;
  background-color: #afe1ff;
}
.headerNav p{
  margin-left:8rem;
}
.headerNav>p:first-child{
  color: #000;
  font-size: 1.8rem;
  font-weight: bolder;
}
.headerNav>p:nth-child(2){
  color:#dc0000;
  text-transform: none;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  font-weight: bolder;
}
.headerList{
  margin-left: 8rem;
  margin-right:8rem;
}
.headerUl{
  list-style: none;
  padding:0;
  justify-content: space-between;
  display: flex;
}
.headerUl li{
  float: left;
  background-color: #c8eaff;
  text-align: center;
  cursor: pointer;
  width:250px;
  height:100px;
}
.headerUl li div:first-child{
  font-weight: bolder;  
  margin-top:8%;
}
.headerUl li div:nth-child(2){
  font-size: 1.1rem;
}
.headerUl li div:last-child{
  font-size: 1.2rem;
  color:#378302;
  font-weight: bolder; 
}
.show{
  background-color: #FFF !important;
  height:130px;
}
.tipstitle{
  font-size: 10px;
  color:#767676;
  padding:1rem 0 1rem 5rem;
}
.tipstitle p:last-child{
  font-size: 1rem;
  color:#378302;
  font-weight: bolder;
}
.tipstitle p:last-child span{
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #378302;
  vertical-align: middle;
  margin-right: 1rem;
}
.bottom{
  display: flex;
  justify-content: space-between;
  padding:3rem 5rem;
}
.historyNext{
  background-color: #dc0000;
  color: #fff;
  font-size: 0.9rem;
}
.historyNext:hover{
  background-color: #af0000;
  color:#fff;
}
.historyPrev{
  background-color: #051039;
  color:#fff;
  font-size: 0.9rem;
}
.historyPrev:hover{
  background-color: #0a1f6b;
  color:#fff;
}
.listitem,.backlistitem{
  margin-bottom:4rem;
}
/*底部按钮*/
.btns{
  margin:50px 0 50px 0;
  display:flex;
  justify-content:space-between;
}
.btns a{
  color:#fff;
  font-size:1rem;
  font-weight:bold;
  padding:14px 24px;
}
.btns a:hover{
  text-decoration:none;
}
.btns>.btn1>a{
  background-color:#051039;
}
.btns>.btn1>a:hover{
  background-color:#264483;
}
.btns>.btn2>a:hover{
  background-color:#cc0404;
}
.btns>.btn2>a{
  background-color:#ed0000;
}
</style>