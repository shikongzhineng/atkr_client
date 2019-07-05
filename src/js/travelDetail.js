import traveldigest from '../components/TravelDigest'
export default {
    components: { traveldigest, },
    data() {
        return {
            lists: [
                {
                    titleimg: "skyp.svg",
                    title: "在机场优先通行",
                    detail: "在行李安检、托运和登机时享受优先待遇。",
                    istrueimg: "cross-blue-grey.svg",
                    explain: ""
                },
                {
                    titleimg: "rfd.svg",
                    title: "退票",
                    detail: "对于某些票价的机票，退款申请必须在起飞前提交",
                    istrueimg: "cross-blue-grey.svg",
                    explain: ""
                },
                {
                    titleimg: "change.svg",
                    title: "机票更改",
                    detail: "您可以在起飞前更改航班日期和班次，可能需要补交差价",
                    istrueimg: "check-blue.svg",
                    explain: "有手续费+或有差价"
                },
                {
                    titleimg: "bagsoute.svg",
                    title: "托运行李",
                    detail: "显示的行李数量和价格为人均",
                    istrueimg: "check-blue.svg",
                    explain: "1 x 23 公斤"
                },
                {
                    titleimg: "bcab.svg",
                    title: "随身行李",
                    detail: "行李尺寸不得超过 55x35x25 厘米",
                    istrueimg: "check-blue.svg",
                    explain: "总重量：12公斤"
                },
                {
                    titleimg: "icon_miles_blue.png",
                    title: "蓝天飞行里数",
                    detail: "加入蓝天飞行会员计划，累计里程",
                    istrueimg: "check-blue.svg",
                    explain: ""
                },
                {
                    titleimg: "divertiss.svg",
                    title: "娱乐消遣",
                    detail: "我们所有客机均配备供您使用的个人屏幕",
                    istrueimg: "check-blue.svg",
                    explain: ""
                },
                {
                    titleimg: "journ.svg",
                    title: "报纸",
                    detail: "登机时，免费自取报纸，免费电子报刊",
                    istrueimg: "check-blue.svg",
                    explain: ""
                },
            ],
            flInfo: Object,
            flParams1: Object,
            flParams2: Object
        }
    },
    methods: {
        back() {
            var con = confirm("返回将不保存当前所选信息，确认直接返回搜索页重新搜索？");
            if (con) {
                this.$router.push("/searchFlight");
            }
        },
        next() {
            let params={flInfo:this.flInfo,flParams1:this.flParams1,flParams2:this.flParams2};
            this.$router.push({name: "reserve", params});
        },
    },
    created() {
        this.load();
        addEventListener.onload = function () {
            var oDiv = document.getElementById("headerInfo")
            window.onscroll = function () {
                var s = document.body.scrollTop || document.documentElement.scrollTop
                if (s > 50) {
                    oDiv.style.position = "fixed";
                    oDiv.style.zIndex = 9999;
                    oDiv.style.top = 0;
                    oDiv.style.width = "100%";
                } else {
                    oDiv.style.position = ""
                }
            }
        }

    },
    created() {
        this.flInfo=this.$route.params.flInfo;
        this.flParams1=this.$route.params.flParams1;
        this.flParams2=this.$route.params.flParams2;
    }
}