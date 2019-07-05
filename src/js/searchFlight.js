export default {
    data() {
        return {
            flInfo: {
                ticket: 1, //单程--1  往返--2
                originplace: '西安', //出发地点
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
            passvalue: [],
            selectedStyle: {
                color: '#fff'
            },
            psgBgStyle: {
                left: 0
            },
            adrCard: {
                active: false
            },
            adrState: 0
        };
    },
    methods: {
        /*搜索航班 */
        scFl() {
            console.log(this.flInfo);
            if (!this.flInfo.originplace) {
                alert("请输入起始地址");
                return;
            }
            if (!this.flInfo.destination) {
                alert("请输入目的地");
                return;
            }
            if (!this.flInfo.startdate) {
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
                name: "flightlist",
                params: this.flInfo
            });
        },
        selCity(addr, key) {
            this.flInfo[key] = addr;
            console.log(this.flInfo[key]);
        },
        delAddr(key) {
            this.flInfo[key] = '';
        },
        showCityList(n) {
            this.adrState = n
            this.adrCard.active = true;
        },
        hiddenCityList() {
            this.adrCard.active = false;
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
        chooseNum(e, num) {
            // 设置乘客总数
            this.flInfo.passnum = num;
            // 设置背景框的位置
            var left = e.target.offsetWidth * (num - 1) + "px";
            this.psgBgStyle = { left };
            // 
        },
        /*选择单程 or 往返 */
        bgChange(n) {
            this.flInfo.ticket = n;
        }
    },
    created() {
        for (let i = 0; i < 9; i++) {
            this.passvalue[i] = "成人(18-64岁)";
        }
    },
    mounted() {
        console.log(this.flInfo);
        //首页热门航线传过来的地址给起始地和目的地
        // console.log(this.$route.params);
        if (this.$route.params.start) {
            this.flInfo.originplace = this.$route.params.start;
        }
        if (this.$route.params.end) {
            this.flInfo.destination = this.$route.params.end;
        }

        //给去程和回程日期设置一个初始值：即当前日期
        this.flInfo.startdate = this.getNow();
        this.flInfo.backdate = this.getNow();
    }
};