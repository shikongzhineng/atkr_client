export default {
    data() {
      return {
        isLogin: 'false'
      };
    },
    methods: {
      tologin() {
        this.$router.push("/login");
      },
      toreg() {
        this.$router.push("/register");
      },
      gopinfo() {
        this.$router.push("/pinformation");
      },
      logout() {
        if (confirm("确认退出登录账户吗？")) {
          this.axios.get("/user/logout").then(res => {
            localeStorage.setItem("isLogin", 'false');
            this.$router.push({ path: "/index" });
          });
        }
      }
    },
    created() {
      this.isLogin = localStorage.getItem("isLogin");
      console.log(this.isLogin);
    }
  };