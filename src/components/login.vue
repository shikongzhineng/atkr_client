<template>
  <div class="container">
    <div id="width">
      <div class="title">启航航空</div>
      <div class="position-relative">
        <span class="yhm position-absolute"></span>
        <input type="text" placeholder="手机/邮箱/登录账号" class="form-control px-5 py-3 mx-auto my-3" name="uname" id="uname" @blur="getuname" >
        <div></div>
      </div>
      <div class="position-relative">
        <span class="mm position-absolute"></span>
        <input type="password" placeholder="密码(8-20位，区分大小写)" class="form-control px-5 py-3 mx-auto my-3" name="upwd" id="upwd" @blur="upwd">
        <div></div>
      </div>
      <div>
        <div class="float-left">
          <input type="checkbox" id="ok" class="icon-left mr-2 mt-1"/>
          <label for="ok" class="mb-2">下次自动登录</label>
        </div>
      </div>
      <div class="login">
        <a href="javascript:;" class="btn w-100 btn-primary mt-2" @click="login">登录</a>
      </div>
      <div class="mt-2">
        <a href="javascript:;" class="fontcolor" @click="reg">没有账号，免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      upwd(){
        if(!$('#upwd').val()||$('#upwd').val().length<8){
          $('#upwd').next().html(`请输入8~20位的密码`);
          $('#upwd').css("border",'1px solid red');
          $('#upwd').next().css({
            "color":'red',
            "text-align":"left",
            "display":"block"
          });
        }else{
          $('#upwd').next().css("display","none");
          $('#upwd').css("border",'2px solid #ddd');
        }
      },
      ////失去焦点时姓名框验证
      getuname(){
        if(!$('#uname').val()){
          $('#uname').next().html('请输入姓名');
          $('#uname').css("border",'1px solid red');
          $('#uname').next().css({
            "color":'red',
            "text-align":"left",
            "display":"block"
            });
        }else{
           $('#uname').next().css("display","none");
           $('#uname').css("border",'2px solid #ddd');
        }
      },
      //点击注册时验证
      login(){
        if(!$('#uname').val()){
          $('#uname').next().html('请输入姓名');
          $('#uname').css("border",'1px solid red');
          $('#uname').next().css({
            "color":'red',
            "text-align":"left",
            "display":"block"
            });
        }else if(!$('#upwd').val()||$('#upwd').val().length<8){
          $('#upwd').next().html(`请输入8~20位的密码`);
          $('#upwd').css("border",'1px solid red');
          $('#upwd').next().css({
            "color":'red',
            "text-align":"left",
            "display":"block"
          });
        }else{
          var uname=$("#uname").val();
          console.log(uname)
          var upwd=$("#upwd").val();
          var str=`uname=${uname}&upwd=${upwd}`;
          // var obj={uname:uname,upwd:upwd};
          // this.axios.get("/user/login",{params:obj}).then(
          //   (res)=>{
          //     if(res.data.code==0){
          //       alert(res.data.msg);
          //       $("#uname").val("");
          //       $("#upwd").val("");
          //     }else if(res.data.code==1){
          //       sessionStorage.setItem("islogin","true");
          //       alert(res.data.msg);
          //       history.go(-1);
          //     }
          //   }
          // )
          this.axios.post("/user/login",str).then(
            (res)=>{
              if(res.data.code==0){
                alert(res.data.msg);
                $("#uname").val("");
                $("#upwd").val("");
              }else{
                sessionStorage.setItem("islogin","true");
                alert(res.data.msg);
                // this.$router.push({path:'/index'});
                history.go(-1);                
              }
            }
          )
        }
      },
      reg(){
        this.$router.push({path:'/registe'});
      }
    }
  }
</script>

<style scoped>

*{
margin: 0;
padding: 0;
font-size: 14px;
}
body{
  background-color: #f5f6f7;
}
.container{
  margin:0 auto;
}
.title{
  font-size: 3rem;
  color:#051035;
  margin-top:8rem;
}
#width{
  text-align: center;
  width:450px;
  margin:0 auto;
}
.container .width .login{
  clear: both;
}
.yhm{
  display: inline-block;
  background: url("../assets/icon-main.png") no-repeat;
  width: 14px;
  height: 14px;
  top:19px;left: 15px;
}
.mm{
  display: inline-block;
  background: url("../assets/icon-main.png") no-repeat;
  width:16px;
  height: 16px;
  background-position:-20px 0;
  top:19px;left: 15px;
}
.icon-left{
  display: inline-block;
  background: url("../assets/icon-main.png") no-repeat;
  width:16px;
  height:16px;
  background-position: -90px 0;
}
.icon-left:focus{
  display: inline-block;
  background: url("../assets/icon-main.png") no-repeat;
  width:16px;
  height:16px;
  background-position: -90px -20px;
}
.btn{
  line-height: 2.5rem;
  border-radius: 3px;
}
.btn:focus{
  box-shadow: none;
}
.btn-primary{
  background-color: #051035;
  padding-top:1rem;
  padding-bottom:1rem;
  font-size:1.3rem;
}
.btn-primary:hover{
  background-color: #051035;
}
/* .btn-primary:active{
  background-color: #0c2470;
} */
.form-control.mx-auto{
  border:2px solid #ddd;
}
.form-control.mx-auto:hover{
  /* height: 50px; */
  border:2px solid #051035;
}
.form-control.mx-auto:focus{
  outline:none;
  box-shadow: none;
}
.fontcolor{
  color:#051035;
}
.fontcolor:hover{
  color:#0c2470;
}
</style>