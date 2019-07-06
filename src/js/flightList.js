import BreadCrumb from "../components/BreadCrumb";
import ListItem from "../components/ListItem.vue";
import TravelDigest from "../components/TravelDigest";
export default {
    components: {
        BreadCrumb,
        ListItem,
        TravelDigest
    },
    data() {
        return {
            list: [
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7701" },
                { date: "", time: "", title: "起价", count: "￥ 7702" }
            ],
            list2: [
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7701" },
                { date: "", time: "", title: "起价", count: "$ 7702" }
            ],
            idx: 3,
            idx2: 3,
            day: ["日", "一", "二", "三", "四", "五", "六"],
            aginReset: true,
            aginReset2: true,
            listitems: [],
            flInfo: {
                ticket: 1,
                originplace: '',
                destination: '',
                startdate: '',
                backdate: '',
                passnum: 1
            },
            flParams1: {
                ystime: '',
                yetime: '',
                sap: '',
                tap: '',
                ytime: '',
                chooseprice: 0,
                fid: 0
            },
            flParams2: {
                ystime: '',
                yetime: '',
                sap: '',
                tap: '',
                ytime: '',
                chooseprice: 0,
                fid: 0
            },
            listitems: []
        };
    },
    methods: {
        listitemtofather1({ ystime, yetime, sap, tap, ytime, chooseprice, fid }) {
            // console.log(chooseprice);
            this.flParams1 = { ystime, yetime, sap, tap, ytime, chooseprice, fid };
        },
        listitemtofather2({ ystime, yetime, sap, tap, ytime, chooseprice, fid }) {
            this.flParams2 = { ystime, yetime, sap, tap, ytime, chooseprice, fid };
        },
        back() {
            this.$router.push("/searchflight");
        },
        next() {
            if (this.flParams1.ystime == "") {
                this.$alert("请选择去程航班");
                return;
            }
            if (this.flInfo.ticket == 2 && this.flParams2.ystime == "") {
                this.$alert("请选择回程航班");
                return;
            }
            let params = {
                flInfo: this.flInfo,
                flParams1: this.flParams1,
                flParams2: this.flParams2
            };
            this.$router.push({
                name: "traveldetail",
                params
            });
        },
        borderShow(item, index) {
            this.idx = index;
            this.flInfo.startdate = this.list[index].time;
            console.log(this.flInfo.startdate);
            this.getFlight();
            this.aginReset = false;
            this.$nextTick(() => {
                this.aginReset = true;
            });
        },
        borderShow2(item, index) {
            this.idx2 = index;
            this.flInfo.backdate = this.list2[index].time;
            console.log(this.flInfo.backdate);
            this.aginReset2 = false;
            this.$nextTick(() => {
                this.aginReset2 = true;
            });
        },
        getFlight() {
            //向服务器请求航班信息
            var url = "flight/select";
            var date = this.flInfo.startdate;
            var obj = {
                saddr: this.flInfo.originplace,
                taddr: this.flInfo.destination,
                date
            };
            // console.log(obj);
            this.axios.get(url, { params: obj }).then(result => {
                let listitems=[]
                if (result.data.code == 1) {
                    var res = result.data.data;
                    // console.log(res);
                    for (var i = 0; i < res.length; i++) {
                        var { ystime, yetime, sap, tap, ytime, scprice, emprice, fid } = res[i];
                        let obj = { ystime, yetime, sap, tap, ytime, vprice: scprice, price: emprice, fid };
                        listitems.push(obj);
                    }
                } else {
                    var obj = { ystime: "", yetime: "", sap: "", tap: "", ytime: "", price: "", vprice: "", fid: "" };
                    listitems.push(obj);
                }
                this.listitems=listitems;
                // console.log(this.listitems)
            });
        },
        load() {
            //console.log(this.originplace+"--"+this.destination+"--"+this.startdate);
            //根据传过来的起始日期展示前后3天，总共7天的日期卡片
            var today = new Date().toLocaleDateString();
            today = new Date(`${today} 08:00:00`).getTime();
            var startdate = new Date(this.flInfo.startdate).toLocaleDateString();
            startdate = new Date(`${startdate} 08:00:00`).getTime();
            // console.log(today + "==" + startdate);
            var sub = Math.abs(startdate - today);
            sub = Math.floor(sub / (24 * 60 * 60 * 1000));
            //console.log("sub1="+sub);
            if (sub < 7) {
                this.idx = sub;
            } else {
                this.idx = 3;
            }
            var date =
                new Date(this.flInfo.startdate).getTime() - this.idx * 1000 * 60 * 60 * 24;
            for (var i = 0; i < 7; i++) {
                let time = new Date(date);
                //console.log("time="+time.toLocaleDateString());
                this.list[i].date = time.getMonth() + 1 + "月" + time.getDate() + "日  星期" + this.day[time.getDay()];
                time = time.toLocaleDateString();
                time = time.replace(/\//g, "-"); //把/替换成-
                time = time.replace(/-([0-9])-/g, "-0$1-"); //把月份和日期中一位数字前面加0
                time = time.replace(/-([0-9])$/g, "-0$1");
                this.list[i].time = time;
                date += 1000 * 60 * 60 * 24;
                // console.log(this.list[i].time);
            }
            if (this.flInfo.ticket == 2) {
                //根据传过来的返程日期展示前后3天，总共7天的日期卡片
                //var today = new Date().toLocaleDateString();
                //today = new Date(`${today} 08:00:00`).getTime();
                var backdate = new Date(this.backdate).toLocaleDateString();
                backdate = new Date(`${backdate} 08:00:00`).getTime();
                // console.log(today + "==" + backdate);
                var sub = Math.abs(backdate - today);
                sub = Math.floor(sub / (24 * 60 * 60 * 1000));
                //console.log("sub2="+sub);
                if (sub < 7) {
                    this.idx2 = sub;
                } else {
                    this.idx2 = 3;
                }
                var date2 =
                    new Date(this.backdate).getTime() - this.idx2 * 1000 * 60 * 60 * 24;
                for (var i = 0; i < 7; i++) {
                    var time = new Date(date2);
                    //console.log("time="+time.toLocaleDateString());
                    this.list2[i].date =time.getMonth() +1 +"月" +time.getDate() +"日  星期" +this.day[time.getDay()];
                    time = time.toLocaleDateString();
                    time = time.replace(/\//g, "-"); //把/替换成-
                    time = time.replace(/-([0-9])-/g, "-0$1-"); //把月份和日期中一位数字前面加0
                    time = time.replace(/-([0-9])$/g, "-0$1");
                    this.list2[i].time = time;
                    date2 += 1000 * 60 * 60 * 24;
                    // console.log(this.list2[i].time);
                }
            }
        }
    },
    created() {
        this.flInfo = Object.assign({}, this.$route.params);
        this.load();
        this.getFlight();
    }
};