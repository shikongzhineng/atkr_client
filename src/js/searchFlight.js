export default {
    data() {
        return {
            flInfo: {
                ticket: 1, //单程--1  往返--2
                originplace: "", //出发地点
                destination: "", //目的地
                startdate: "", //去程日期，格式："yyyy-mm-dd"
                backdate: "", //回程日期
                passnum: 1, //乘客人数
            },
            city: [
                ["西安", "大理", "厦门", "三亚"],
                ["北京", "武汉", "上海", "长沙", "广州", "深圳", "大理"]
            ],
            hotcity: ["西安", "大理", "厦门", "三亚"],
            common: ["北京", "武汉", "上海", "长沙", "广州", "深圳", "大理"],
            pickerOptions: {
                //日期组件带的
                disadledDate(time) {
                    return time.getTime() > Data.now();
                }
            },
            number: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
            options: [
                "老年人(65岁或以上)",
                "成人(18-64岁)",
                "少年(12-17岁)",
                "儿童(2-11岁)"
            ],
            passvalue:["成人(18-64岁)"],
            selectedStyle: {
                color: '#fff'
            },
            psgBgStyle: {
                left: 0
            },
            psgBgWidth:0
        };
    },
    methods: {
        /*搜索航班 */
        search() {
            if (this.flInfo.originplace) {
                alert("请输入起始地址");
                return;
            }
            if (this.flInfo.destination) {
                alert("请输入目的地");
                return;
            }
            if (this.flInfo.startdate) {
                alert("请输入去程日期");
                return;
            }
            var today = new Date().toLocaleDateString();
            today = new Date(`${today} 08:00:00`).getTime();
            var startdate = new Date(`${this.flInfo.startdate} 08:00:00`).getTime();
            //console.log(today+" "+startdate);
            if (startdate < today) {
                alert("无法预定今天之前的机票，请重新选择");
                return;
            }
            if (this.flInfo.ticket == 2 && !this.flInfo.backdate) {
                alert("请输入回程日期");
                return;
            }
            var backdate = new Date(`${this.flInfo.backdate} 08:00:00`).getTime();
            //console.log(today+" "+backdate);
            if (this.flInfo.ticket == 2 && backdate < today) {
                alert("无法预定今天之前的机票，请重新选择");
                return;
            }
            if (this.flInfo.ticket == 1) {
                this.flInfo.backdate = "";
            }
            this.$router.push({
                path: "/flightlist",
                params: this.flInfo
            });
        },
        delAddr(key) {
            this.flInfo[key] = '';
        },
        //获取当前日期
        getNow() {
            var date = new Date().toLocaleDateString();
            date = date.replace(/\//g, "-"); //把/替换成-
            //把月份和日期中一位数字前面加0
            date = date.replace(/-([0-9])-/g, "-0$1-");
            date = date.replace(/-([0-9])$/g, "-0$1");
            //console.log(date);
            return date;
        },
        /*选择乘客人数 */
        chooseNum(e,num) {
            console.dir(e.target.offsetWidth,num);
            this.flInfo.passnum = num;
            this.psgBgWidth=e.target.offsetWidth;
            var left=this.psgBgWidth*(num-1)+"px";
            console.log(left);
            this.psgBgStyle = {left};
        },
        /*选择单程 or 往返 */
        bgChange(n) {
            this.flInfo.ticket = n;
        }
    },
    mounted() {
        //首页热门航线传过来的地址给起始地和目的地
        console.log(this.$route.params);
        this.flInfo.originplace = this.$route.params.start;
        this.flInfo.destination = this.$route.params.end;

        //给去程和回程日期设置一个初始值：即当前日期
        this.flInfo.startdate = this.getNow();
        this.flInfo.backdate = this.getNow();


        //需要获取焦点时加上深蓝色边框，失去焦点时去掉边框的元素都加到数组中统一处理
        var list = [
            ".address",
            ".passNum",
            ".adrInput input.start",
            ".adrInput input.end",
            ".everypass>.el-select>.el-input>input"
        ];
        for (var item of list) {
            var tar = document.querySelector(item);
            tar.onfocus = function (e) {
                this.style.outline = "none";
                this.style.border = "2px solid #051039";
            };
            tar.onblur = function (e) {
                this.style.border = "2px solid #ccc";
            };
        }
        /*地址搜索按钮 */
        var search = document.querySelectorAll(".adrInput>.el-col-3>.box");
        for (var tar of search) {
            /*获取焦点，展开下拉卡片 */
            tar.onfocus = function () {
                var id = "";
                if (this.id == "b1") {
                    id = "c1";
                } else {
                    id = "c2";
                }
                var card = document.querySelector(".adrInput #" + id);
                this.style.outline = "none";
                this.style.border = "2px solid #051039";
                card.style.height = "300px";
                card.style.overflow = "scroll";
            };
            /*失去焦点，合上下拉卡片 */

            tar.onblur = function (e) {
                // var id = "";
                // if (this.id == "b1") {
                //     id = "c1";
                // } else {
                //     id = "c2";
                // }
                this.style.border = "0px";
                setTimeout(function () {
                    //失去焦点收起卡片太快了，点击选择卡片内容会选不上，所以加个延时
                    var card = document.querySelector(".adrInput #" + id);
                    card.style.height = "0";
                    card.style.overflow = "hidden";
                }, 200);
            };
        }
        /*下拉地址列表 */
        var lis = document.querySelectorAll("#card1 li");
        for (var li of lis) {
            li.onclick = function () {
                //console.log(this.id);
                this.originplace = this.id;
            };
        }
        var lis = document.querySelectorAll("#card2 li");
        for (var li of lis) {
            li.onclick = function () {
                //console.log(this.id);
                this.flInfo.destination = this.id;
            };
        }
    }
};