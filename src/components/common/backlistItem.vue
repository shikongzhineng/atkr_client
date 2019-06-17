<template>
<div class="containers">
    <table class="flight_list">
        <thead>
            <tr>
                <td style="width:50%;">
                    <img src="../../assets/traveldigest/plane.png" style="width:50px;margin-right:1rem;" alt="">
                    直航航班
                </td>
                <td style="" colspan="3">
                    <div class="sort_weapper">
                        <div class="sort">
                            <span class="t1_label">以该方式筛选并显示：</span>
                            <div class="switch_container">
                                <span class="switch" :class="idx==index?'a':''" v-for="(item,index) of navList" :key="index" @click="switchContainer(index)">
                                    <a href="javascript:;">{{item}}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </thead>
        <tbody class="list_item">
        <tr v-for="(listitem,indexs) of listitems" :key="indexs">
            <td style="">
                <div class="time_left">
                    <div><span>{{listitem.stime}}</span>{{listitem.saddr}}</div>
                    <div><span>{{listitem.etime}}</span> {{listitem.taddr}}</div>
                </div>
                <div class="time_right">
                    <div>旅行时长：<span> {{listitem.time}}</span></div>
                    <!-- <div>转机： <span>巴黎</span></div> -->
                </div>
            </td>
            <td style="width:24%;" class="secondTd" @click="choose(indexs,1)">
                <div class="price">
                    <span class="fake_radio"><div :class="idxs==indexs&&isChoose1?'circle':''"></div></span>
                    <span>CNY {{listitem.price}}</span>
                    <div>此等票价，还剩下2个座位</div>
                </div>
            </td>
            <td style="width:24%;" class="secondTd" @click="choose(indexs,2)">
                <div class="price">
                    <span class="fake_radio"><div :class="idxs==indexs&&isChoose2?'circle':''"></div></span>
                    <span>CNY {{listitem.vprice}}</span>
                    <div>此等票价，还剩下2个座位</div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>    
</template>
<script>
export default {
    data(){
        return {
            listitems:[
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },

                {
                    "stime":"01:00",
                    "etime":"14:05",
                    "saddr":"北京 (PEK)",
                    "taddr":"以为赛 (IBZ)",
                    "time":"19h05",
                    "price":"7480",
                    "vprice":"7880"
                },
            ],
            navList:["出发时间","旅行时长","票价"],
            idx:0,
            idxs:0,
            isChoose1:true,
            isChoose2:false,
        }
    },
    methods:{
        switchContainer(index){
            this.idx = index;
            //console.log(this.idx);
            this.load();
            
        },
        choose(indexs,n){
            if(n==1){
                this.isChoose1=true;
                this.isChoose2=false;
                this.idxs=indexs;
            }else if(n==2){
                this.isChoose1=false;
                this.isChoose2=true;
                this.idxs=indexs;
            }
        },
        load(){
            //向服务器请求航班信息
            var url = "";
            //1. 按照出发时间升序查询        
            if(this.idx == 0){
                url = "flight/select";
            }else if(this.idx == 1){//2. 按照旅行时长升序查询
                url = "flight/select";
            }else{//3. 按照票价升序查询
                url = "flight/select";
            }
            //console.log(url);
            var obj = {saddr:this.originplace,taddr:this.destination,date:this.startdate};
            //console.log(obj); 
            this.axios.get(url,{params:obj})
            .then(result=>{                                               
                //console.log(result);
            })
        }
    },
    props:["originplace","destination","startdate"],
    mounted(){        
        this.load();
    }
}
</script>
<style scoped>
.a{
    background-color: #051039;
    color: #fff;
}
.acolor{
    color:#fff;
}
.containers{
    color: #051039;
}
.flight_list{
    width: 90%;
    margin: 0 auto;
}
.flight_list td{
    border: 1px solid #ddd;
    
}
.flight_list>thead>tr>td:first-child{
    font-size: 1.5rem;
    font-weight: bolder;
    color:#ed0000;
    padding:2rem 0;
}
.flight_list>thead>tr>td:last-child{
    text-align: right;
    padding-right: 2rem;
}
.t1_label{
    font-size: 1.2rem;
    margin-right:2rem;
}
.switch_container{
    display: inline-block;
    border: 0.1rem solid #767676;
}
.switch_container:hover{
    border: 0.1rem solid #051039;
}
.switch_container>span{
    display:inline-block;
    padding:1rem 2rem;
    vertical-align: middle;
    text-align: center;
}
.switch_container>span>a{
    font-size: 1.2rem;
    color:#767676;
    text-decoration: none;
    
}
.switch_container>span>a:hover{
    color:#ed0000;
}
.list_item td:first-child{
    padding:1rem 2rem;
    display: flex;
    justify-content: space-between;
}
/*出发时间*/
.time_left{
    /* display: inline-block; */
    font-size: 1.1rem;
    font-weight: bolder;
    padding:1rem;
    margin-left: 3rem;
}
.time_left span{
    color:#0062e6;
}
/*旅行时长*/
.time_right{
    /* display: inline-block; */
    font-size: 1.1rem;
    color:#767676;
    vertical-align: middle;
    margin-right:5rem; 
    padding:1rem;
}
.time_right span{
    font-weight: 600;
}
.price{
    padding:1rem 1rem;
    cursor: pointer;
    text-align: center;
}
.secondTd:hover{
    border: 1px solid #767676;
    background-color: #f8f9f9;
}
/* 选框样式 */
.fake_radio{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid #767676;
    border-radius: 50%;
    vertical-align: middle;
}
.price span:nth-child(2){
    font-size: 1.5rem;
    color:#051039;
    margin-left: 8px;
}
.price div{
    color:#ed0000;
    font-size: 0.8rem;
}
.circle{
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #051039;
    margin-top:5px;
}
</style>


