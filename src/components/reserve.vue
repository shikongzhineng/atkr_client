<template>
    <div class="main">
        <div class="breadCrumb">
            <div class="breadnav">
                <ul class="breadUl">
                    <li class="first">
                        <a href="#">您的旅行</a>
                    </li>
                        <li class="first">时刻表与价格</li>
                        <li class="first">旅行详情</li>
                        <li class="current">个人信息</li>
                        <li>付款</li>
                    </ul>
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
        <!-- 是否登录 -->
        <div class="login" v-show="islogin=='false'">
            <div class="log">登录</div>
            <div class="isLog">
                <p>您是蓝天飞行会员或拥有法航账户？</p>
                <el-button class="btn" @click="tologin">立即登录</el-button>
            </div>
        </div>
        <!-- 个人信息 -->
        <div class="personalData">
            <div class="personal">个人信息</div>
            <div class="personalDetail" v-for="(item,i) of list" :key="i">
                <table style="width:100%;">
                    <tr>
                        <td>姓名<span>* </span></td>
                        <td>
                            <input id="name" type="text">
                            <span class="warning">请输入姓名！</span>
                        </td>
                    </tr>
                    <tr class="sex">
                        <td style="width:20%">性别<span>* </span> </td>
                        <td>
                            <div>
                                <el-radio-group v-model="radio1">
                                    <el-radio-button label="男">男</el-radio-button>
                                    <el-radio-button label="女">女</el-radio-button>
                                </el-radio-group>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>身份证号<span>*</span></td>
                        <td>
                            <input id="idCard" type="text">
                            <span class="warning">请输入身份证号！</span>
                        </td>
                    </tr>
                    <tr>
                        <td>手机<span>*</span></td>
                        <td>
                            <input id="phone" type="text">
                            <span class="warning">请输入手机号！</span>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- <div class="personal">联系人</div>
            <div class="personalDetail">
                <table>
                    <tr>
                        <td>姓名<span>* </span></td>
                        <td>
                            <input id="named" type="text">
                            <span class="warning">请输入联系人姓名！</span>
                        </td>
                    </tr>
                    <tr>
                        <td>手机<span>*</span></td>
                        <td>
                            <input id="phoned" type="text">
                            <span class="warning">请输入联系人手机号！</span>
                        </td>
                    </tr>
                </table>
            </div> -->
              <div class="personal">特定手续</div>
              <div class="personalDetail">
                  <span>据国家有关部门出于监管需要，要求您必须提供个人信息。您在预订机票后，可前往我们网站“我的预订”页面填写该信息。</span>
              </div>
        </div>
        <div class="btns">
        <div class="btn1" @click="back">
          <a href="javascript:;">上一步</a>
        </div>
        <div class="btn2" @click="next">
          <a href="javascript:;">提交订单</a>
        </div>
      </div>
    </div>
</template>
<script>
import traveldigest from './common/travelDigest.vue'
import { setTimeout } from 'timers';
export default {

    components:{traveldigest},
    data(){
        return {
                radio1:"男",
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
                chooseprice1:"",
                fid1:0,

                ystime2:"",
                yetime2:"",
                sap2:"",
                tap2:"",
                ytime2:"", 
                chooseprice2:"",
                fid2:0,

                islogin:false,

                list:[]
            }
    },
    methods:{
        tologin(){
            this.$router.push("/login");
        },
        back(){
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
                fid2:this.fid2,
                
            }
            });
        },
        next(){            
            for(var i = 0;i<this.passnum;i++){
                var name=document.querySelectorAll("#name")[i];
                var idCard=document.querySelectorAll("#idCard")[i];
                var phone=document.querySelectorAll("#phone")[i];
                if(!name.value){
                    alert("信息不完整");
                    name.nextElementSibling.style.display="block";
                    name.style.borderColor="red";
                    return ;                    
                }
                var idreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证号正则验证
                var preg=/^1[3456789]\d{9}$/;
                if(!idCard.value){
                    alert("信息不完整");
                    idCard.nextElementSibling.style.display="block";
                    idCard.style.borderColor="red";
                    return ;                    
                }
                if(idreg.test(idCard.value) == false){
                    alert("信息格式不正确");
                    idCard.nextElementSibling.style.display="block";
                    idCard.style.borderColor="red";
                    idCard.nextElementSibling.innerHTML="请输入合法的身份证号！"
                    return ;                    
                }
                if(!phone.value){
                    alert("信息不完整");
                    phone.nextElementSibling.style.display="block";
                    phone.style.borderColor="red";
                    return ;
                }  
                if(preg.test(phone.value)==false){
                    alert("信息格式不正确");
                    phone.nextElementSibling.style.display="block";
                    phone.style.borderColor="red";
                    phone.nextElementSibling.innerHTML="请输入正确的手机号！"
                    return ;                    
                }
            }
            for(var i = 0;i<this.passnum;i++){
                var uname=document.querySelectorAll("#name")[i].value;
                var idCard=document.querySelectorAll("#idCard")[i].value;
                var phone=document.querySelectorAll("#phone")[i].value;
                var obj = {uname:"",idCard:"",phone:""};
                obj.uname = uname;
                obj.idCard = idCard;
                obj.phone = phone;             
                this.list[i] = obj;
                console.log(this.list[i]);
            }
            
            if(sessionStorage.getItem("islogin") == "false"){
                if(confirm("请先登录！")){
                    this.$router.push("/login");
                    return ;
                }else{
                    return ;
                }
            }
            if(confirm("确定提交订单吗？")){
            for(var i = 0;i<this.passnum;i++){ 
                var uname=document.querySelectorAll("#name")[i].value;
                var id=document.querySelectorAll("#idCard")[i].value;
                var phone=document.querySelectorAll("#phone")[i].value;               
                //数据库添加订单  
                var gender = (this.radio1=="男"?1:0);
                var now = new Date().getTime();
                var tkn = now+"001"+Math.floor(Math.random()*0);
                this.axios.post(
                    "/pltk/add",
                    `id=${id}&name=${uname}&phone=${phone}&gender=${gender}&tkn=${tkn}&stime=${now}&price=${this.chooseprice1}&fid=${this.fid1}`
                ).then(result=>{
                    console.log(result);
                }) 
                if(this.ticket == 2){
                    tkn = now+"002"+i;
                    this.axios.post(
                        "/pltk/add",
                        `id=${id}&name=${uname}&phone=${phone}&gender=${gender}&tkn=${tkn}&stime=${now}&price=${this.chooseprice2}&fid=${this.fid1}`
                    ).then(result=>{
                        console.log(result);                    
                    })
                }     
            }
                //console.log("提交成功");
                this.$message('提交订单成功，3s后自动跳转至您的订单详情页面');
                var t = setTimeout(()=>{
                    this.$router.push("/pinformation");
                },3000);    
                   
            }

        },
        load(){
            this.islogin = sessionStorage.getItem("islogin");
            console.log("islogin="+this.islogin);
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
            this.fid1 = this.$route.query.fid1;
            
            this.ystime2=this.$route.query.ystime2;
            this.yetime2=this.$route.query.yetime2;
            this.sap2=this.$route.query.sap2;
            this.tap2=this.$route.query.tap2;654
            this.ytime2=this.$route.query.ytime2;
            this.chooseprice2=this.$route.query.chooseprice2;
            this.fid2 = this.$route.query.fid2;
            

            for(var i=0;i<this.passnum;i++){
                this.list[i] = 0;
            }
		}
    },
    created(){
        this.load();
        
    }
}
</script>
<style scoped>
.traveldigest{
    margin-bottom: 5rem;
}
.breadCrumb{
  border-top: 1px solid #e8e5e5;
  background-image:linear-gradient(to right,#051039 60%,#fff 60%);
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
.login{
    width: 70%;
    margin:0 auto;
    outline: none;
    box-shadow: none;
}
.login .log{
    color: #fff;
    font-weight: bolder;
    font-size: 1.2rem;
    padding:1rem 1rem;
    background-color: #051035;
    border: 4px solid #051035;
}
.login .isLog{
    border: 4px solid #051035;    
    text-align: center;
}
.login .isLog p{
    color: #051035;
    padding-top:1rem ;
    padding-left: 1rem;
    font-size: 1.3rem;
    font-weight: lighter;
    text-align: left;
}
.login .isLog .btn{
    background-color: #051035;
    color: #fff;
    font-weight: bolder;
    padding:1.2rem 3rem;
    border-radius: 0;
    box-shadow: 0;
    margin-bottom: 5rem;
    font-size: 1.2rem;
    
}
.login .isLog .btn:hover{
    background-color: #14438b
}
.personalData{
    width: 70%;
    margin: 0 auto;
}
.personal{
    font-size: 2rem;
    font-weight: bolder;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
}
table{
    margin-top: 2rem;
    width:100%;
}
table tr td:first-child{
    text-align: right;
    padding-right: 2rem;
    font-size: 1.2rem;
    color: #051035;
    font-weight: bolder;
}
table tr td:first-child span{
    color:red;
}
.personalDetail{
    border: 2px solid #ccc;
    /* width: 70%; */
    margin: 0 auto;
}
#name,#idCard,#phone,#named,#phoned{
    width: 60%;
    height: 4rem;
    font-size: 1.5rem;
    outline:none;
    margin-bottom: 1rem;
}
#name:hover,#idCard:hover,#phone:hover,#phoned:hover,#named:hover{
    border-color: #051035;
    box-shadow: none; 
}
#name:focus,#idCard:focus,#phone:focus,#phoned:focus,#named:focus{
    outline: #051035;
}
.personalDetail>span{
    font-size: 1.2rem;
    font-weight: lighter;
    color: #051035;
    display: block;
    padding: 2rem 1rem;
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
.warning{
    color: #dc0000;
    font-size: 1.2rem;
    margin-left: 1.5rem;
    display: none;
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

