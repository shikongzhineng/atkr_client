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
						<img class="titleImg" :src="require(`../assets/traveldigest/${item.titleimg}`)" alt="">
						<span>{{item.title}}</span>
					</div>
					<div class="col-8">
						<span class="spanNav">{{item.detail}}</span>
					</div>
				</div>
			</div>
			<div class="col-4">
				<img class="isTrue" :src="require(`../assets/traveldigest/${item.istrueimg}`)" alt="">
				<div>{{item.explain}}</div>
			</div>
		</div>
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
<style scoped>
.breadCrumb{
  border-top: 1px solid #e8e5e5;
  background-image:linear-gradient(to right,#051039 50%,#fff 50%);
  border-bottom: 1px solid #e8e5e5;
  margin-bottom: 2rem;
}
.breadnav{
  display: table;
  width: 100%;
  border-collapse: collapse;
  border: none;
}
.breadUl{
  list-style: none;
  padding:0 8rem;
  display: flex;
  justify-content: space-around;
  margin:0;
}
.breadUl li{
  float: left;
  font-weight: 600;
  padding:0 5rem;
  color:#767676;
  padding:1rem 0;
}
.first{
  background-color:#051039;
  color: #fff !important;
}
.first a{
  color:#fff;
}
.current{
  color:#fff !important;
  background-color: #ed0000;
  position: relative;
  padding:1rem 8rem 1rem 8rem !important;
}
.current::before,.current::after{
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
}
.current::before{
  border-right: 3.5rem solid transparent;
  border-top:3.5rem solid #051039;
  left: 0;
}
.current::after{
  border-left:3.5rem solid transparent;
  border-bottom: 3.5rem solid #fff;
  right:0;
}

/*  */
#headerInfo{
  padding-top:2rem;
  background-color: #dff2fd;
}
.headerNav p{
  margin-left:8rem;
  margin-bottom:0;
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
  font-weight: bolder;
}
.travelList .col-8 span{
	color: #051039;
	font-weight: bolder;
}
.travelList{
	margin-left: 8rem;
	/* margin-top: 10rem; */
	width: 90%;
}
.col-4>span{
	margin-left: 1rem;
}
.travelList>.row{
	border-top:1px solid #555;
}
.travelList>.row:last-child{
	border-bottom:1px solid #555;
}
.travelList>.row>.col-8,.travelList>.row>.col-4{
	padding: 2rem 0;
}
.travelList>.row>.col-4{
	text-align: center;
}
.spanNav{
	line-height: 40px;
}
.isTrue{
	width: 2rem;
}
.travelList>.row>.col-8>.row>.col-4>.titleImg:first-child{
	height: 40px;
}
.titleImg{
	width:40px;
}
.traveldigest{
	width: 100%;
}
.bottom{
  display: flex;
  justify-content: space-between;
  padding:3rem 5rem;
  margin-bottom: 3rem;
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
<script>
import traveldigest from './common/travelDigest.vue'
export default {
	components:{traveldigest,},
    data(){
		return {
			lists:[
				{
					titleimg:"skyp.svg",
					title:"在机场优先通行",
					detail:"在行李安检、托运和登机时享受优先待遇。",
					istrueimg:"cross-blue-grey.svg",
					explain:""
				},
				{
					titleimg:"rfd.svg",
					title:"退票",
					detail:"对于某些票价的机票，退款申请必须在起飞前提交",
					istrueimg:"cross-blue-grey.svg",
					explain:""
				},
				{
					titleimg:"change.svg",
					title:"机票更改",
					detail:"您可以在起飞前更改航班日期和班次，可能需要补交差价",
					istrueimg:"check-blue.svg",
					explain:"有手续费+或有差价"
				},
				{
					titleimg:"bagsoute.svg",
					title:"托运行李",
					detail:"显示的行李数量和价格为人均",
					istrueimg:"check-blue.svg",
					explain:"1 x 23 公斤"
				},
				{
					titleimg:"bcab.svg",
					title:"随身行李",
					detail:"行李尺寸不得超过 55x35x25 厘米",
					istrueimg:"check-blue.svg",
					explain:"总重量：12公斤"
				},
				{
					titleimg:"icon_miles_blue.png",
					title:"蓝天飞行里数",
					detail:"加入蓝天飞行会员计划，累计里程",
					istrueimg:"check-blue.svg",
					explain:""
				},
				{
					titleimg:"divertiss.svg",
					title:"娱乐消遣",
					detail:"我们所有客机均配备供您使用的个人屏幕",
					istrueimg:"check-blue.svg",
					explain:""
				},
				{
					titleimg:"journ.svg",
					title:"报纸",
					detail:"登机时，免费自取报纸，免费电子报刊",
					istrueimg:"check-blue.svg",
					explain:""
				},
			],
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
		// props:[
		// 	"ticket","originplace","destination","startdate","backdate","passnum",
		// ],
		methods:{
			back(){
				var con = confirm("返回将不保存当前所选信息，确认直接返回搜索页重新搜索？");
				if(con){
					this.$router.push("/searchFlight");
				}
			},
			next(){
				this.$router.push({
          path:"/reserve",query:{
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
      			fid2:this.fid2,					
						
          }
        });
			},
			load(){
				//接收数据			     
				this.ticket = this.$route.query.ticket;
				this.originplace = this.$route.query.originplace;
				this.destination = this.$route.query.destination;
				this.startdate = this.$route.query.startdate;
				this.backdate = this.$route.query.backdate;
				this.passnum = this.$route.query.passnum;

				this.ystime1=this.$route.query.ystime1;
				this.yetime1=this.$route.query.yetime1;
				this.sap1=this.$route.query.sap1;
				this.tap1=this.$route.query.tap1;
				this.ytime2=this.$route.query.ytime1;
				this.chooseprice1=this.$route.query.chooseprice1;
				this.fid1=this.$route.query.fid1;
				
				this.ystime2=this.$route.query.ystime2;
				this.yetime2=this.$route.query.yetime2;
				this.sap2=this.$route.query.sap2;
				this.tap2=this.$route.query.tap2;
				this.ytime2=this.$route.query.ytime2;
				this.chooseprice2=this.$route.query.chooseprice2;
				this.fid2=this.$route.query.fid2;
			}
		},
		created(){
			
			this.load();

			addEventListener.onload=function(){
				var oDiv = document.getElementById("headerInfo")
				window.onscroll = function()
				{
						var s = document.body.scrollTop || document.documentElement.scrollTop
						if(s>50) {
								oDiv.style.position="fixed";
								oDiv.style.zIndex=9999;
								oDiv.style.top=0;
								oDiv.style.width="100%";
						} else {
								oDiv.style.position= ""
						}
				}
			}

		},
		mounted(){

		}
}
// window.onload=
// 		function(){
// 				var oDiv = document.getElementById("headerInfo")
// 				window.onscroll = function()
// 				{
// 						var s = document.body.scrollTop || document.documentElement.scrollTop
// 						if(s>50) {
// 								oDiv.style.position="fixed";
// 								oDiv.style.zIndex=9999;
// 								oDiv.style.top=0;
// 								oDiv.style.width="100%";
// 						} else {
// 								oDiv.style.position= ""
// 						}
// 				}
// }
</script>




