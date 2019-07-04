import Carousel from "../components/Carousel";
export default {
  data() {
    return {
      hotFlight: [
        {
          img: "img/index/hot-1.jpg",
          start: "北京",
          end: "上海",
          info: "经济舱往返含税",
          price: "￥1,358起"
        },
        {
          img: "img/index/hot-2.jpg",
          start: "北京",
          end: "西安",
          info: "商务舱往返含税",
          price: "￥2,258起"
        },
        {
          img: "img/index/hot-3.jpg",
          start: "西安",
          end: "云南",
          info: "商务舱往返含税",
          price: "￥2,888起"
        },
        {
          img: "img/index/hot-4.jpg",
          start: "西安",
          end: "三亚",
          info: "经济舱往返含税",
          price: "￥1,058起"
        }
      ],
      islogin: false
    };
  },
  methods: {
    //点击热门航线，跳转至购买机票查询页面，并将起点终点传入
    search(index) {
      var start = this.hotFlight[index].start;
      var end = this.hotFlight[index].end;
      this.$router.push({
        name:'searchflight',
        params: {
          start,
          end
        }
      });
    }
  },
  components: {
    Carousel
  }
};