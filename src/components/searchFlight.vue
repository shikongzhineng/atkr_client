<!-- 购买机票：机票搜索页 -->
<template>
  <div>
    <div class="title">
      购买机票
    </div>
    <div class="section">
      <h3 class="subtitle">目的地</h3>
      <div tabindex="0" class="address">
        <div class="bgblock"></div>
        <div class="row">
          <div id="d1" class="col-6" @click="bgchange('d1')">单程</div>
          <div id="d2" class="col-6" @click="bgchange('d2')">往返</div>
        </div>
      </div>
      <el-row class="adrInput">
        <el-col :span="9">
          <div>
            <input class="start" type="text" placeholder="出发" v-model="originplace">
            <div class="feiji">
              <img src="img/searchFlight/feiji-1.png" alt="">
              <div></div>
            </div>
            <div class="delete" id="delete1">
              <img src="img/searchFlight/delete.png" alt="">  
            </div>        
          </div>
          <div id="c1">
            <div class="adrCard" id="card1">
              <span>热门城市</span>
              <ul class="hotcity">
                <li v-for="(item,i) of city[0]" :key="i" :id="item">{{item}}</li>
              </ul>
              <span>通航城市</span>
              <ul class="commoncity">
                <li v-for="(item,i) of city[1]" :key="i" :id="item">{{item}}</li>
              </ul>
            </div>
          </div>
          
        </el-col>
        <el-col :span="3">
          <div>
          <img class="search" src="img/searchFlight/sousuo.png" alt="">
          </div>
          <div tabindex="0" class="box" id="b1"></div>
        </el-col>
        <el-col :span="9">
          <div>
            <input v-model="destination" class="end" type="text" placeholder="到达">
            <div class="feiji">
              <img src="img/searchFlight/feiji-2.png" alt="">
              <div></div>
            </div>            
            <div class="delete" id="delete2">
              <img src="img/searchFlight/delete.png" alt="">
            </div>            
          </div>
          <div id="c2">
            <div class="adrCard" id="card2">
              <span>热门城市</span>
              <ul class="hotcity">
                <li v-for="(item,i) of city[0]" :key="i" :id="item">{{item}}</li>
              </ul>
              <span>通航城市</span>
              <ul class="commoncity">
                <li v-for="(item,i) of city[1]" :key="i" :id="item">{{item}}</li>                
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
          <img class="search" src="img/searchFlight/sousuo.png" alt="">
          </div>
          <div tabindex="0" class="box" id="b2"></div>
        </el-col>
      </el-row>
      <div class="line"></div>
      <h3 class="subtitle">日期</h3>
      <div class="data row">
        <div class="col-6 go">          
          <div class="block small">
            去程
            <el-date-picker v-model="startdate" type="date" placeholder="选择去程日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
          <img src="img/searchFlight/go.png" alt="">
          <div class="line"></div>
        </div>
        <div class="col-6 come">          
          <div class="block small">
            回程
            <el-date-picker v-model="backdate" type="date" placeholder="选择回程日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
          <img src="img/searchFlight/come.png" alt=""> 
          <div class="line"></div>         
        </div>
      </div>
      <div class="line"></div>
      <!-- 乘客=================================================================== -->
      <h3 class="subtitle">乘客</h3>
      <span class="small">乘客人数</span>
      <div class="passengerNum">
        <div class="bgblock"></div>
        <div tabindex="0" class="passNum d-flex">
          <!-- div本身没有获取焦点事件，加上tabindex="0"即可 -->
          <div :id="`num${item}`" class="num" v-for="item of 9" :key="item" @click="chooseNum(item)">{{item}}</div>
        </div>
        <div class="passage">
          <div class="everypass" v-for="i of passnum" :key="i">
            <span class="small">第{{number[i-1]}}名乘客</span>
            <el-select v-model="passvalue[i-1]">
              <el-option v-for="item of options" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
            <div class="question" v-if="i==1">
              <div id="questionimg"><img src="img/searchFlight/questionfill.png" alt=""></div>
              <div class="tipscard">
                <div>
                  <div><img src="img/searchFlight/tishi.png" alt=""></div>
                  <p>
                    儿童旅行：<br><br>
                    - 4岁以下婴儿必须由一名至少年满18周岁的成人陪同（如果陪伴者是孩子的父亲或法定监护人，其年龄可以低于18周岁。在这种情况下，请直接联系我们，以便办理您的预定）。
                    <br><br>
                    - 一名儿童（5-14岁，或4-11岁，根据目的地情况而定）可以单独旅行，但前提是以“单独旅行儿童”的身份旅行。
                  </p>
                  <div class="arrow"><img src="img/searchFlight/arrow.png" alt=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部两个按钮============================================================================ -->
      <div class="line"></div>      
      <div class="btns">
        <div class="btn1">
          <a href="javascript:;">回到首页</a>
        </div>
        <div class="btn2">
          <a href="javascript:;">搜索航班</a>
        </div>
      </div>

      <!-- <button @click="getNow">click</button> -->
      <!-- <button @click="getpassvalue">click</button> -->
      <!-- <img src="img/searchFlight/2.png" alt=""> -->

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        ticket:1,//单程--1  往返--2
        originplace:"",//出发地点
        destination:"",//目的地
        city:[
          ["西安","大理","厦门","三亚"],
          ["北京","武汉","上海","长沙","广州","深圳","大理"]
        ],
        hotcity:["西安","大理","厦门","三亚"],
        common:["北京","武汉","上海","长沙","广州","深圳","大理"],
        startdate:"",//去程日期，格式："yyyy-mm-dd"
        backdate:"",//回程日期
        pickerOptions:{//日期组件带的
          disadledDate(time){
            return time.getTime() > Data.now();
          }        
        },
        passnum:1,//乘客人数
        number:["一","二","三","四","五","六","七","八","九"],
        options: [
          '老年人(65岁或以上)', 
          '成人(18-64岁)', 
          '少年(12-17岁)', 
          '儿童(2-11岁)'],
        passvalue:['成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)','成人(18-64岁)'],
      }
    },
    components:{
    },
    methods:{
      getNow(){//获取当前日期
        var date = (new Date()).toLocaleDateString();
        //var date = "2019/3/28";
        date = date.replace(/\//g,'-');//把/替换成-
        date = date.replace(/-([0-9])-/g,'-0$1-');//把月份和日期中一位数字前面加0
        date = date.replace(/-([0-9])$/g,'-0$1');
        //console.log(date);
        return date;
      },
      /*选择乘客人数 */
      chooseNum(num){
        this.passnum = num;
        var bgblock = document.querySelector(".passengerNum .bgblock"); 
        var cur = document.getElementById(`num${num}`);
        for(var i = 1;i<=9;i++){
          var select = document.getElementById(`num${i}`);
          if(i == num){
            select.style.color = "#fff";
          }else{
            select.style.color = "#555";            
          }
        }
        bgblock.style.left = cur.offsetLeft+"px";      
      },
      
      /*选择单程 or 往返 */
      bgchange(str){
        var bgblock = document.querySelector(".address .bgblock");
        var other;
        if(str == "d1"){//选择单程
          bgblock.style.left = 0;          
          other = "d2";
          // 选择单程时隐藏回程的日期选择框
          document.querySelector(".data>.come").style.display = "none";
          this.ticket = 1;
        }else{//选择往返
          bgblock.style.left = 50+"%";        
          other = "d1";
          document.querySelector(".data>.come").style.display = "block";
          this.ticket = 2;          
        }        
        document.querySelector("#"+str).style.color = "#fff";
        document.querySelector("#"+other).style.color = "#555";
      },
    },

    mounted(){

      //首页热门航线传过来的地址给起始地和目的地
      this.originplace = this.$route.query.start;
      this.destination = this.$route.query.end;

      //出发地和目的地输入框的删除内容点击事件
      var deletebtns = document.querySelectorAll(".adrInput .delete");
      var _this = this;
      for(var btn of deletebtns){
        btn.onclick = function(){
          if(this.id == "delete1"){
            _this.originplace = "";
          }
          if(this.id == "delete2"){
            _this.destination = "";
          }
        }        
      }

      //给去程和回程日期设置一个初始值：即当前日期
      this.startdate = this.getNow();
      this.backdate = this.getNow();

      //需要获取焦点时加上深蓝色边框，失去焦点时去掉边框的元素都加到数组中统一处理
      var list = [".address",".passNum",".adrInput input.start",".adrInput input.end",".everypass>.el-select>.el-input>input"];
      for(var item of list){
        var tar = document.querySelector(item);
        tar.onfocus = function(e){
          this.style.outline="none";       
          this.style.border="2px solid #051039";
        }
        tar.onblur = function(e){
          this.style.border="2px solid #ccc";
        }
      }
      //提示卡片
      var questionimg = document.getElementById("questionimg");
      var tipscard = document.querySelector(".everypass .tipscard");
      questionimg.onmouseover = function(){
        tipscard.style.display = "block";
      }
      questionimg.onmouseout = function(){
        tipscard.style.display = "none";
      }
      /*地址搜索按钮 */
      var search = document.querySelectorAll(".adrInput>.el-col-3>.box");
      for(var tar of search){
        /*获取焦点，展开下拉卡片 */
        tar.onfocus = function(){
          var id = "";
          if(this.id == "b1"){
            id = "c1";
          }else{
            id = "c2";
          }
          var card = document.querySelector(".adrInput #"+id);
          this.style.outline="none";
          this.style.border="2px solid #051039";
          card.style.height = "300px";
          card.style.overflow = "scroll";
        }
        /*失去焦点，合上下拉卡片 */
             
        tar.onblur = function(e){
          var id = "";
          if(this.id == "b1"){
            id = "c1";
          }else{
            id = "c2";
          }
          this.style.border="0px";          
          setTimeout(function(){//失去焦点收起卡片太快了，点击选择卡片内容会选不上，所以加个延时
            var card = document.querySelector(".adrInput #"+id);
            card.style.height = "0";
            card.style.overflow = "hidden";
          },200)
          
        }
      }
      /*下拉地址列表 */
      var lis = document.querySelectorAll("#card1 li");
      for(var li of lis){
        li.onclick = function(){
          //console.log(this.id);          
          _this.originplace = this.id;
        }
      }
      var lis = document.querySelectorAll("#card2 li");
      for(var li of lis){
        li.onclick = function(){
          //console.log(this.id);
          _this.destination = this.id;
        }
      }
      /*底部两个按钮跳转页面 */
      var comeindex = document.querySelector(".btns>.btn1>a");
      comeindex.onclick = function(){
        _this.$router.push("/index");
      }
      var comeindex = document.querySelector(".btns>.btn2>a");
      comeindex.onclick = function(){
        if(!_this.originplace){
          alert("请输入起始地址");
          return ;
        }
        if(!_this.destination){
          alert("请输入目的地");
          return ;
        }
        if(!_this.startdate){
          alert("请输入去程日期");
          return ;
        }
        var today = new Date().toLocaleDateString();
        today = new Date(`${today} 08:00:00`).getTime();
        var startdate = new Date(`${_this.startdate} 08:00:00`).getTime();
        //console.log(today+" "+startdate);
        if(startdate < today){
          alert("无法预定今天之前的机票，请重新选择");
          return ;
        }
        if(_this.ticket == 2 && !_this.backdate){
          alert("请输入回程日期");
          return ;
        }       
        var backdate = new Date(`${_this.backdate} 08:00:00`).getTime();
        //console.log(today+" "+backdate);
        if(_this.ticket == 2 && backdate < today){
          alert("无法预定今天之前的机票，请重新选择");
          return ;
        }
        if(_this.ticket == 1){
          _this.backdate = "";
        }
        _this.$router.push({
          path:"/flightlist",query:{
            ticket:_this.ticket,
            originplace:_this.originplace,
            destination:_this.destination,
            startdate:_this.startdate,
            backdate:_this.backdate,
            passnum:_this.passnum
          }
        });
        //_this.$router.push(`/flightlist/ticket=${_this.ticket}&originplace=${_this.originplace}&destination=${_this.destination}&startdate=${_this.startdate}&backdate=${_this.backdate}&passnum=${_this.passnum}`);
      }
    }
  }
</script>

<style scoped>
/*-----------------------------------------------------------*/
.title{
  width:100%;
  height:10rem;
  background-color:#294a92;  
  padding:2rem;
  font-size:2rem;
  color:#fff;
}
.subtitle{
  margin:20px 0;
  font-size:1.4rem;
  font-weight:600;
  color:#0062e6;
}
.small{
  color:#051039;
  font-size:0.95rem;
  font-weight:bolder;
}
/*单程 or 往返*/
.address{
  width:45%;
  position:relative;
  border:2px solid #ccc;
  text-align:center;
  color:#555;
  font-size:1rem;
}
.address:hover{
  border:2px solid #051039;  
}
.address>.row>div{
  padding:5px 0;
  cursor: pointer;
  letter-spacing:0.8rem;
}
.address>.row>div:first-child{
  color:#fff;
}
.address>.bgblock{
  width:50%;
  height:31px;
  opacity: 0.9;
  border:1px solid #fff;
  position:absolute;
  background-color:#051039;
  left:0px;
  transition:all .2s linear;
}
/*起始地点输入框*/
.adrInput{
  margin:30px 0;
}
.adrInput input{
  width:100%;
  border:2px solid #ccc;
  padding:8px 50px;
  font-size:1rem;
  letter-spacing:0.2rem;
  cursor: pointer;
}
.adrInput input:hover{
  border:2px solid #051039;    
}
/* .adrInput>.el-col-3>div{
  margin:6px 10px;
}
.adrInput>.el-col-9{
  position:relative;
} */
.adrInput .delete,.adrInput .feiji{
  height:40px;width:44px;
  position:absolute;
  top:0;
  cursor: pointer;
}
.adrInput .delete{
  right:0;
}
.adrInput .feiji{
  left:0;
}
.adrInput .feiji>div{
  position:absolute;  
  top:0;left:2.7rem;
  width:2px;height:25px;
  border:1px solid #ccc;
  margin:10px 0;
}
.adrInput .delete>img,.adrInput .feiji>img{
  margin:5px;
}
.adrInput .delete:hover{
  border:2px solid #051039;
}
.adrInput .search{
  cursor: pointer;
}
/* .adrInput>.el-col-3{
  position: relative;
}
.adrInput>.el-col-3>.box{
  width:44px;
  height:44px;
  margin:0;
  position:absolute;
  top:0;left:5px;
  cursor: pointer;
}
.adrInput>.el-col-3>.box:hover{
  border:2px solid #051039;
} */
/*搜索城市 下拉卡卡片*/
.adrInput .adrCard{
  background-color:#f2f2f2;
  padding:20px;
  color:#051039;
  box-sizing:border-box;
}
.adrInput #c1,.adrInput #c2{
  position:absolute;  
  width:100%;
  height:0px;
  overflow:hidden;
  z-index:999;
  transition:height .2s linear;
}

.adrInput .adrCard>span{
  font-size:0.8rem;
}
.adrInput .adrCard>ul{
  list-style:none;
  padding:0;
  font-size:1rem;
}
.adrInput .adrCard>ul>li{
  background-color:#fff;
  padding:10px 15px;
  margin-right:20px;
  margin-top:3px;
  cursor: pointer;
}
.line{
  border:1px solid #ccc;
}
/*日期*/
.data{
  margin-bottom:30px;
}
/* .data .el-input{
  margin-left:2rem;
  width:70% !important;
}
.data input.el-input__inner{
  width:100%;
  border:2px solid #ccc;
  border-radius:0px;
  padding:8px 50px;  
  font-size:1rem;
  cursor: pointer;    
}
.data input.el-input__inner:hover,.data input.el-input__inner:focus{
  border:2px solid #051039;
} */
.data>div{
  position:relative;
}
.data>div>img{
  display:block;
  position:absolute;
  top:0.3rem;
  left:5.5rem;
  cursor: pointer;      
}
.data>div>.line{
  position:absolute;  
  top:0;left:7.9rem;
  width:2px;height:26px;
  border:1px solid #ccc;
  margin:8px 0;

}
.data>.come{
  display:none;
}
/*乘客人数选择*/
.passNum{
  width:100%;
  border:2px solid #ccc;
  text-align:center;
  padding:8px 0px;
  cursor: pointer;
}
.passNum:hover{
  border:2px solid #051039;  
}
.passNum>.num{
  width:11.111111%;
  position:relative;
  color:#555;
  text-align:center;
  cursor: pointer;
}
.passNum>.num:first-child{
  color:#fff;
}
.passNum>.num:not(:last-child){
  border-right:2px solid #ccc;
}
.passengerNum{
  position: relative;
}
.passengerNum>.bgblock{
  width:11%;
  position:absolute;
  height:35px;
  opacity: 0.9;
  border:1px solid #fff;
  background-color:#051039;
  left:2px;
  top:3px;
  transition:all .2s linear;
}
/*第几位乘客*/
.passage{
  margin-top:40px;
}
.everypass{
  margin:30px 0;
  display:flex;
  flex-wrap: nowrap;
  align-items: center;
}
/* .everypass>.el-select{
  margin-left:120px;
  margin-right:60px;
  width:20%;
}
.everypass>.el-select>.el-input>input{
  border-radius: 0px;
  border:2px solid #ccc;
  color:#051039;
  
  padding:20px 10px;
}
.everypass>.el-select>.el-input>input:hover{
  border:2px solid #051039;    
}
.everypass>.el-select .el-icon-arrow-up:before{
  color:#051039;
  font-size:25px;
} */
.question{
  position: relative;
  display:flex;
}
.question>#questionimg{
  cursor: pointer;
}
.everypass .tipscard>div>p{
  padding-left:20px;
}
.everypass .tipscard{
  display:none;
}
.everypass .tipscard>div{  
  width:350px;
  margin-left:40px;
  padding:15px;
  background-color:#264483;
  position:absolute;
  top:-122px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  color:#fff;
  font-size:15px;
}
.everypass .tipscard>div>.arrow{
  position:absolute;
  top:40%;
  left:-29px;
}
/*底部按钮：退出   搜索航班*/
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