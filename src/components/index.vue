<!-- 首页 -->
<template>
  <div>
      <!-- 轮播图 -->
      <carousel></carousel>
      <!-- 热门线路 -->
      <div class="hottitle">
        ———— 热门航线 ————
      </div>
      <div class="hot">
        <el-row :gutter="30">
          <el-col :span="6" v-for="(item,i) of hotFlight" :key="i">
            <div  @click="search(i)">
              <img :src="item.img" alt="">
              <span class="adr">{{item.start}} - {{item.end}}</span>
              <span>{{item.info}}</span>
              <span>{{item.price}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
  import carousel from "./common/carousel"
  export default {
    data(){
      return {
        hotFlight:[
          {img:"img/index/hot-1.jpg",start:"北京",end:"上海",info:"经济舱往返含税",price:"￥1,358起"},
          {img:"img/index/hot-2.jpg",start:"北京",end:"西安",info:"商务舱往返含税",price:"￥2,258起"},
          {img:"img/index/hot-3.jpg",start:"西安",end:"云南",info:"商务舱往返含税",price:"￥2,888起"},
          {img:"img/index/hot-4.jpg",start:"西安",end:"三亚",info:"经济舱往返含税",price:"￥1,058起"}
        ],
        islogin:"false",
      }
    },    
    methods:{
      //点击热门航线，跳转至购买机票查询页面，并将起点终点传入
      search(index){
        var start = this.hotFlight[index].start;
        var end = this.hotFlight[index].end;
        this.$router.push({
          path:"/searchflight",
          query:{
            start,
            end
          }
        });
      }
    },

    components:{
      carousel,
      
    },
    created(){
      //if(sessionStorage.getItem("islogin") == null){
       //sessionStorage.setItem("islogin","false");
       //console.log(sessionStorage.getItem("islogin"));
      //}else{
        //location.reload();
      //}
            
    },
    mounted(){
    },
    updated(){
    },
  }
  
</script>

<style scoped>
.hottitle{
  margin:3rem auto;
  text-align:center;
  font-size:2rem;
  font-weight:300;
}
.hot img{
  width:100%;
}
/* .hot .el-col{
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
} */
.hot{
  margin:50px 15px;
}
</style>