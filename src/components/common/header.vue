<template>
<div>
  <div id="header">
    <a href="javescript:;"><img src="../../assets/planelogo.png" /></a>
    <div class="right" v-show="islogin=='false'">
      <div class="tz">
        <a href="javescript:;"><img src="../../assets/lingdang.png" /></a>
      </div>
      <div class="border"></div>
      <div class="log" @click="tologin">
        <img src="../../assets/denglu.png" />
        <a href="javescript:;">登录账户</a>
      </div>
      <div class="border"></div>
      <div class="reg" @click="toreg">
        <img src="../../assets/zhuce.png" />
        <a href="javescript:;">注册账户</a>
      </div>
    </div>
    <div class="login" v-show="islogin=='true'">
        <div class="tz">
          <a href="javescript:;"><img src="../../assets/lingdang.png" /></a>
        </div>
        <div class="log">
          <img src="../../assets/denglu.png" />
          <a href="javescript:;" @click="gopinfor">您的账户</a>
          <a href="javescript:;" class="ml-2" @click="logout">注销</a>
        </div>
      </div>
  </div>
  <div class="nav">
    <div>首页</div>
    <div>查询航班</div>
    <div>我的订单</div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      islogin:"false",
    }
  },
  methods:{
    tologin(){
      this.$router.push("/login");
    },
    toreg(){
      this.$router.push("/registe");      
    },
    gopinfor(){
      this.$router.push("/pinformation");
    },
    logout(){
      if(confirm("确认退出登录账户吗？")){
        this.axios.get("/user/logout").then((res)=>{
          sessionStorage.setItem("islogin","false");        
          this.$router.push({path:'/index'});
        })
      }
    }
  },
  created(){
    console.log(sessionStorage.getItem("islogin"));
    if(sessionStorage.getItem("islogin") == null){
       sessionStorage.setItem("islogin","false");
    }
    this.islogin = sessionStorage.getItem("islogin");
    console.log(this.islogin);
  },
  mounted(){

    var navdivs = document.querySelectorAll(".nav>div");
    var _this = this;
    for(var i=0;i<navdivs.length;i++){
      navdivs[i].onmouseover = function(){
        this.style.borderBottom = "2px solid #051035";
        this.style.backgroundColor = "#ddd";
      }
      navdivs[i].onmouseout = function(){
        this.style.borderBottom = "0";
        this.style.backgroundColor = "#eee";
      }
      if(i == 0){
        navdivs[i].onclick = function(){      
          _this.$router.push("/index");
        }
      }else if(i == 1){          
          navdivs[i].onclick = function(){  
          _this.$router.push("/searchflight");
          }
        }else if(i == 2){
          navdivs[i].onclick = function(){
          _this.$router.push("/pinformation");
          }
        }
    }
  }
}
</script>
<style scoped>
  #header{
    display:flex;
    justify-content:space-between;
  }
  .right,.login{
    display:flex;
    justify-content:space-around;
    width:20%;
    align-items: center;
  }
  .right img,.login img{
    height:20px;
  }
  .border{
    width:2px;
    height:40%;
    border-left:2px solid #ccc;
  }
  .right a,.login a{
    font-size:1.1rem;
    color:#051035;
    cursor: pointer;
    padding-left:0.5rem;
  }
  .right a:hover,.login a:hover{
    color:#ed0000;
    text-decoration: #ed0000;
  }
  .login{
    width:20%;
  }
  .nav{
    display:flex;
    align-items: center;
    background-color:#eee;
    margin-bottom:3px;
  }
  .nav>div{
    padding:1.5rem 2.5rem;    
    color:#051035;
    font-size:1.2rem;
    cursor: pointer;
  }
</style>