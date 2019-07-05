import traveldigest from "../components/TravelDigest";
import { setTimeout } from "timers";
export default {
    components: { traveldigest },
    data() {
        return {
            flInfo:Object,
            flParams1:Object,
            flParams2:Object,
            isLogin: 'false',
            userList: [],
            valiReg:{
                uname:'/[a-zA-Z]\w{3,32}/',
                idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                phone:/^1[3456789]\d{9}$/
            },
            valiMsg:{
                uname:'',
                phone:'',
                phone:''
            },
            valiClass:{
                uname:{failed:false},
                idCard:'',
                phone:'',
            }
        };
    },
    methods: {
        tologin() {
            this.$router.push("/login");
        },
        back() {
            let params = {
                flInfo: this.flInfo,
                flParams1: this.flParams1,
                flParams2: this.flParams2
            };
            this.$router.push({ name: "traveldetail", params });
        },
        next() {
            if (this.isLogin !== "true") {
                if (confirm("请先登录！")) {
                    this.$router.push("/login");
                    return;
                } else {
                    return;
                }
            }

            for (let elem of userList) {
                if (!elem.name) {
                    alert("信息不完整");
                    name.nextElementSibling.style.display = "block";
                    name.style.borderColor = "red";
                    return;
                }
                if (!elem.idCard) {
                    alert("信息不完整");
                    idCard.nextElementSibling.style.display = "block";
                    idCard.style.borderColor = "red";
                    return;
                }
                if (valiReg.idCard.test(elem.idCard) === false) {
                    alert("信息格式不正确");
                    idCard.nextElementSibling.style.display = "block";
                    idCard.style.borderColor = "red";
                    idCard.nextElementSibling.innerHTML = "请输入合法的身份证号！";
                    return;
                }
                if (!elem.phone) {
                    alert("信息不完整");
                    phone.nextElementSibling.style.display = "block";
                    phone.style.borderColor = "red";
                    return;
                }
                if (valiReg.phone.test(elem.phone) == false) {
                    alert("信息格式不正确");
                    phone.nextElementSibling.style.display = "block";
                    phone.style.borderColor = "red";
                    phone.nextElementSibling.innerHTML = "请输入正确的手机号！";
                    return;
                }
            }            

            if (confirm("确定提交订单吗？")) {
                for (var i = 0; i < this.flInfo.passnum; i++) {
                    //数据库添加订单
                    // var gender = this.radio1 == "男" ? 1 : 0;
                    var now = new Date().getTime();
                    var tkn = now + "001" + Math.floor(Math.random() * 0);
                    this.axios
                        .post(
                            "/pltk/add",
                            `name=${uname}&phone=${phone}&gender=${gender}&tkn=${tkn}&stime=${now}&price=${this.flParams1.chooseprice}&fid=${this.flParams1.fid}`
                        )
                        .then(result => {
                            console.log(result);
                        });
                    if (this.ticket == 2) {
                        tkn = now + "002" + i;
                        this.axios.post(
                                "/pltk/add",
                                `id=${id}&name=${uname}&phone=${phone}&gender=${gender}&tkn=${tkn}&stime=${now}&price=${this.flParams2.chooseprice}&fid=${this.flParams2.sfid}`
                            )
                            .then(result => {
                                console.log(result);
                            });
                    }
                }
                //console.log("提交成功");
                this.$message("提交订单成功，3s后自动跳转至您的订单详情页面");
                var t = setTimeout(() => {
                    this.$router.push("/pinformation");
                }, 3000);
            }
        },
        load() {
            this.isLogin = localStorage.getItem("isLogin");
            //   console.log("islogin=" + this.islogin);
            //接收数据
            this.flInfo = this.$route.params.flInfo;
            this.flParams1 = this.$route.params.flParams1;
            this.flParams2 = this.$route.params.flParams2;
            for (var i = 0; i < this.flInfo.passnum; i++) {
                this.userList[i] = {
                    uname:'',
                    idCard:'',
                    phone:'',
                    gender:1
                };
            }
        }
    },
    created() {
        this.load();
    }
};