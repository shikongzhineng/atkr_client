<!-- 首页轮播图组件 -->
<template>
  <div class="block">
    <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="(item,i) in banners" :key="i">
        <div class="ban">
            <img id="img" :src="item.img" alt="">
            <div class="card">
                <span>{{item.span1}}</span>
                <span v-html="item.span2"></span>
                <div :id="`a${i+1}`">
                    <img src="img/index/arrow.png" alt="">
                    <a href="javascript:;">{{item.a}}</a>
                </div>
                
            </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return {
            banners:[
                {img:"img/index/banner-1.jpg",span1:"暑期促销，西安直飞三亚",span2:"￥6358起<br>经济舱往返含税",a:"立即预定"},
                {img:"img/index/banner-2.jpg",span1:"让世界变身您的游乐场",span2:"加入蓝天飞行会员计划，赚取里程，立享会员特权！",a:"立即注册"},   
                {img:"img/index/banner-3.jpg",span1:"商务舱座椅：您的茧型座位",span2:"座椅-睡床助您在高空中安然入睡。",a:"探索全新商务舱"},
                {img:"img/index/banner-4.jpg",span1:"天合优享，优先独享的世界",span2:"伴随天合优享br>在您旅行的每个环节<br>享受优先通行！",a:"探索天合优享"},
            ],
            //bannerHeight:'',
        }
    },
    methods:{
		
	},
	mounted(){    
        // var imgsize = document.querySelector(".ban>#img");
        // setTimeout(()=>{
        //     this.bannerHeight = imgsize.offsetHeight;	
        //     // this.bannerLoad();
        // },1);
        // document.querySelector(".block").addEventListener('resize',()=>{
        //     this.bannerHeight = imgsize.offsetHeight;
        //     // console.log(this.bannerHeight);
        // })

        var a1 = document.getElementById("a1");
        var a3 = document.getElementById("a3");
        var a4 = document.getElementById("a4");
        var _this = this;
        a1.onclick = function(){
            sessionStorage.setItem("start","西安");
            sessionStorage.setItem("end","三亚");
            _this.$router.push("/searchFlight");
        }
        a3.onclick = a4.onclick = function(){
            _this.$router.push("/searchFlight");
        }
        var a2= document.getElementById("a2");
        a2.onclick = function(){
            _this.$router.push("/register");
        }
    },
}
</script>

<style scoped>
/*轮播指示符*/
/* .block .el-carousel__button{
    width:12px !important;
    height:12px !important;
    border-radius:50%;
}
.block .el-carousel__indicator{
    padding:12px 7px !important;
}
.block .el-carousel__indicator.is-active button{
    background-color:#14438b;
} */
/*轮播图片和小卡片*/
.ban{
    position:relative;
}
.ban>#img{
    /*轮播图大小*/
    width:100%;
}
.card{
    width:35%;
    height:40%;
    background:rgba(255,255,255,0.5);
    position:absolute;
    top:30%;left:30%;
    color:#051039;
    font-size:1rem;
    font-weight:bold;    
    text-align:left;
    padding-left:15px;
}
.card>span{
    display:block;
    padding:1% 0;
}
.card>span:first-child{
    font-size:1.4rem;
    font-weight:700;
}
.card>div{
    margin-top:5%;
}
.card>div>img{
    width:20px;height:20px;
}
.card>div>a{
    width:50px;
    color:#051039;    
}
.card>div>a:hover{
    color:#f00;
    text-decoration:none;  
}
</style>