export default {
  data() {
    return {
      banners: [
        {
          img: "img/index/banner-1.jpg",
          span1: "暑期促销，西安直飞三亚",
          span2: "￥6358起<br>经济舱往返含税",
          a: "立即预定"
        },
        {
          img: "img/index/banner-2.jpg",
          span1: "让世界变身您的游乐场",
          span2: "加入蓝天飞行会员计划，赚取里程，立享会员特权！",
          a: "立即注册"
        },
        {
          img: "img/index/banner-3.jpg",
          span1: "商务舱座椅：您的茧型座位",
          span2: "座椅-睡床助您在高空中安然入睡。",
          a: "探索全新商务舱"
        },
        {
          img: "img/index/banner-4.jpg",
          span1: "天合优享，优先独享的世界",
          span2: "伴随天合优享br>在您旅行的每个环节<br>享受优先通行！",
          a: "探索天合优享"
        }
      ]
    };
  },
  methods: {
    selectUrl(i) {
      let url = '';
      switch (i) {
        case 0:
          url = '/searchflight'
          break;
        case 1:
          url = '/register'
          break;
        case 2:
          url = '/searchflight'
          break;
        case 3:
          url = '/searchflight'
          break;
      }
      return url;
    },
    jump(url) {
      this.$router.push(url);
    }
  }
}