import traveldigest from "../components/TravelDigest";
import { setTimeout } from "timers";
export default {
    components: { traveldigest },
    data() {
        return {
            flInfo: Object,
            flParams1: Object,
            flParams2: Object,
            isLogin: String,
            userList: [],
            inputBoxsList: [],
            valiReg: {
                uname: /^[a-zA-Z]\w{1,32}$/,
                idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                phone: /^1[3456789]\d{9}$/
            },
            valiMsg: {
                uname: { failed: '用户名格式不正确', success: '' },
                idCard: { failed: '身份证号格式不正确', success: '' },
                phone: { failed: '请输入正确的手机号', success: '' },
            },
            valiClass: {
                uname: { failed: 'failed', success: 'success' },
                idCard: { failed: 'failed', success: 'success' },
                phone: { failed: 'failed', success: 'success' },
            },
            valiCurrent: { value: '' },
            valiOld: { value: '' }
        };
    },
    methods: {
        valiFn(user, inputBoxs, keyList) {
            let bool = true;
            for (let key of keyList) {
                this.valiOld.value = this.valiCurrent.value;
                if (!user[key]) {
                    inputBoxs[key].valiMsg = inputBoxs[key].title + '不能为空';
                    inputBoxs[key].valiClass = this.valiClass[key].failed;
                    inputBoxs[key].valiState = 0;
                    this.$message(inputBoxs[key].valiMsg);
                    bool = false;
                }
                if (this.valiReg[key].test(user[key]) === false) {
                    inputBoxs[key].valiMsg = this.valiMsg[key].failed;
                    inputBoxs[key].valiClass = this.valiClass[key].failed;
                    inputBoxs[key].valiState = 0;
                    this.$message(inputBoxs[key].valiMsg);
                    bool = false;
                } else {
                    inputBoxs[key].valiMsg = this.valiMsg[key].success;
                    inputBoxs[key].valiClass = this.valiClass[key].success;
                    inputBoxs[key].valiState = 1;
                }
                this.valiCurrent.value = user[key];
                // console.log(inputBoxs[key],'\n',user[key]);
            }
            return bool;
        },
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
                this.$confirm('请先登录！', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var s={val:3};
                    var t1=setInterval(()=>{
                        s.val--;
                    },1000);
                    var t=setTimeout(()=>{
                        this.$router.push({name:'login'});
                        clearTimeout(t);
                        clearInterval(t1);
                    },3000)
                    this.$message({
                        type: 'success',
                        message: s.val+'秒后前往登录页面',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取登录'
                    });
                });
                return;
            }
            // 表单验证
            for (let elem of inputBoxsList) {
                let bool = this.valiFn(this.userList[i], elem, elem.valiAccess);
                if (!bool) { return };
            }
            // 提交订单
            if (confirm("确定提交订单吗？")) {
                for (let elm of userList) {
                    //数据库添加订单
                    // var gender = this.radio1 == "男" ? 1 : 0;
                    var now = new Date().getTime();
                    var tkn = now + "001" + Math.floor(Math.random() * 0);
                    let params = `id=${elm.idCard}name=${elm.uname}&phone=${elm.phone}&gender=${elm.gender}&tkn=${tkn}&stime=${now}&price=${this.flParams1.chooseprice}&fid=${this.flParams1.fid}`
                    this.axios.post('/pltk/add', params).then(result => {
                        console.log(result);
                    });
                    if (this.ticket == 2) {
                        tkn = now + "002" + i;
                        let params = `id=${elm.idCard}&name=${elm.uname}&phone=${elm.phone}&gender=${elm.gender}&tkn=${tkn}&stime=${now}&price=${this.flParams2.chooseprice}&fid=${this.flParams2.fid}`
                        this.axios.post("/pltk/add", params).then(result => {
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
        // data数据初始化，在生命周期钩子函数created中执行
        load() {
            this.isLogin = localStorage.getItem("isLogin");
            //   console.log(this.isLogin);
            //接收数据
            this.flInfo = this.$route.params.flInfo;
            this.flParams1 = this.$route.params.flParams1;
            this.flParams2 = this.$route.params.flParams2;
            for (var i = 0; i < this.flInfo.passnum; i++) {
                this.userList[i] = {
                    uname: '',
                    idCard: '',
                    phone: '',
                    gender: 1,
                };
                this.inputBoxsList[i] = {
                    uname: {
                        title: '姓名',
                        valiClass: '',
                        valiMsg: '',
                        valiState: -1
                    },
                    idCard: {
                        title: '身份证号',
                        valiClass: '',
                        valiMsg: '',
                        valiState: -1
                    },
                    phone: {
                        title: '手机号',
                        valiClass: '',
                        valiMsg: '',
                        valiState: -1
                    },
                    valiAccess: ['uname', 'idCard', 'phone']
                }
            }
        }
    },
    created() {
        this.load();
    }
};