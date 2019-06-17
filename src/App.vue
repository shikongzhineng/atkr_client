<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>
<script>
export default {
  data(){
    return {
      islogin:"",
    }
  },
  created(){
          //this.islogin = sessionStorage.getItem("islogin");
  },
 watch: {
    
    '$route' (to, from) {
        this.$router.go(0);
    },
    //this.islogin = sessionStorage.getItem("islogin");
    //sessionStorage.setItem("islogin",this.login)
      
       //console.log(this.$route.path)
  }
}
</script>
<style>
html{font-size:14px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:90%;
  margin:0 auto;
  color: #2c3e50;
  box-sizing:border-box;
}

/*carousel.vue*/
/*轮播指示符*/
.block .el-carousel__button{
    width:12px !important;
    height:12px !important;
    border-radius:50%;
}
.block .el-carousel__indicator{
    padding:12px 7px !important;
}
.block .el-carousel__indicator.is-active button{
    background-color:#14438b;
}
/*index.vue*/
.hot .el-col{
  text-align:left;
}
.hot .el-col>div>span{
  display:block;
  padding-left:10px;
}
.hot .el-col>div>span.adr{
  font-size:1rem;
  font-weight:700;
  margin:10px 0;
}
.hot .el-col>div>span:last-child{
  font-size:1.3rem;
  font-weight:700;
  color:#f00;
  padding-left:6px;
  margin-bottom:40px;
}
.hot .el-col>div:hover{
  border:2px solid #051039;
  cursor: pointer;
}
/*searchFlight.vue*/
.adrInput>.el-col-3>div{
  margin:6px 10px;
}
.adrInput>.el-col-9{
  position:relative;
}
.adrInput>.el-col-3{
  position: relative;
}
.adrInput>.el-col-3>.box{
  width:44px;
  height:40px;
  margin:0;
  position:absolute;
  top:0;left:5px;
  cursor: pointer;
}
.adrInput>.el-col-3>.box:hover{
  border:2px solid #051039;
}
.data .el-input{
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
}
.everypass>.el-select{
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
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: #051035 !important;
    border-color:#051035 !important; 
}
.el-radio-button__orig-radio+.el-radio-button__inner{
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
