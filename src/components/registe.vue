<template>
  <div class="container">
    <div id="width">
      <div class="title">天堂航空</div>
      <div class="position-relative">
        <span class="yhm position-absolute"></span>
        <input type="text" placeholder="姓名" class="form-control px-5 py-3 mx-auto my-3" id="uname" @blur="getuname" name="uname">
        <div></div>
      </div>
      <div class="position-relative">
        <span class="mm position-absolute"></span>
        <input type="password" placeholder="密码(8-20位，区分大小写)" class="form-control px-5 py-3 mx-auto my-3" name="upwd" id="upwd" @blur="upwd">
        <div></div>
      </div>
      <div class="float-left">
        点击“注册”即同意<span class="span1">《服务协议》</span>
      </div>
      <div class="login">
        <a href="javascript:;" class="btn w-100 btn-primary mt-2" @click="reg">注册</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
      //失去焦点时密码框验证
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
      reg(){
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
          var str=`uname=${uname}&upwd=${upwd}`
          this.axios.post("/user/register",str).then(
            (res)=>{
              console.log(res);
              if(res.data.code==0){
                alert(res.data.msg);
                $("#uname").val("");
                $("#upwd").val("");
              }else if(res.data.code==1){
                alert(res.data.msg)
                this.$router.push({path:'/login'});
              }
            }
          )
        }
      },
      mounted() {
        reg();
      },
      updated() {
      },
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
  color:#051035;
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
.span1{
  color:red;
}
</style>