export default {
  data() {
    return {
      navList: ["出发时间", "旅行时长", "票价"],
      idx: 0, //筛选方式
      idxs: 0, //选择的航班的数据下标：listitems[idxs]
      isChoose1: true,
      isChoose2: false,

      flParams: {
        ystime: "",
        yetime: "",
        sap: "",
        tap: "",
        ytime: "",
        price: "",
        vprice: "",
        chooseprice: 0,
        fid: 0
      },
      haveflight: true
    };
  },
  props: ['listitems', 'flInfo'],
  methods: {
    switchContainer(index) {
      this.idx = index;
      //改变idx---改变排序方式显示
    },
    choose(indexs, n) {
      if (n == 1) {
        this.isChoose1 = true;
        this.isChoose2 = false;
        this.flParams.chooseprice = this.listitems[indexs].price;
      } else if (n == 2) {
        this.isChoose1 = false;
        this.isChoose2 = true;
        this.flParams.chooseprice = this.listitems[indexs].vprice;
      }
      this.idxs = indexs;
      this.setchooseflight(this.idxs);
    },
    setchooseflight(index) {
      this.flParams.ystime = this.listitems[index].ystime;
      this.flParams.yetime = this.listitems[index].yetime;
      this.flParams.sap = this.listitems[index].sap;
      this.flParams.tap = this.listitems[index].tap;
      this.flParams.ytime = this.listitems[index].ytime;
      this.flParams.fid = this.listitems[index].fid;
    },
  },
  updated() {
    this.$emit("listitemtofather", this.flParams);
  },
};
