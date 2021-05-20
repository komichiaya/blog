<!--  -->
<template>
  <div>
    <div class="main">
      <div class="main_left">
        <div class="article_module">
          <div class="article_mian" v-if="res">
            <div class="article_module_title">
              <div class="title_h2 txt">
                <h2>{{ res.title }}</h2>
              </div>
              <div class="title_tagInfo txt">
                <div class="info">
                  <span class="date">
                    <i class="iconfont icon-riqi"></i>
                    {{ time(res.updatedAt) }}
                  </span>
                  <span class="type">
                    <i class="iconfont icon-17"></i>
                    {{ res.categories[0] }}
                  </span>
                  <span class="count">
                    <i class="iconfont icon-faxian"></i>
                    {{ res.count }}人
                  </span>
                </div>
              </div>
            </div>
            <div class="article_module_info">
              <div class="fistSection" v-html="res.body"></div>
            </div>
          </div>
        </div>
      </div>
      <User />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import User from "../User/user";
import { time } from "~/assets/time.js";
export default {
  components: {
    User,
  },
  props: {
    res: { type: Object, default: () => {} },
    // count: {
    //   type: Number,
    // },
  },
  data() {
    return {
      ida: "",
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // this.$store.dispatch("blog/getTxtInfo", this.id);
    // 取token
    // let token = sessionStorage.getItem(this.txtInfo._id);
    // if (token) {
    //   if (token._id === this.txtInfo._id) {
    //     this.$store.commit("blog/get_txtinfo", token);
    //   }
    // }
    // window.addEventListener("unload", () => {
    //   //将最新的shopData存入sessionStorage
    //   sessionStorage.setItem(this.txtInfo._id, JSON.stringify(this.txtInfo));
    // });
  },
  // computed: {
  //   ...mapState("blog", {
  //     txtInfo: (state) => state.txtInfo,
  //   }),
  // },
  methods: {
    time(row) {
      return time(row);
    },
    getTxtInfo() {},
  },
  watch: {
    $route(demo, test) {
      console.log(demo);
    },
    id(newa, oldb) {
      console.log(newa);
    },
  },
  beforeDestroy() {
    // 存入token;
    // sessionStorage.setItem(this.txtInfo._id, JSON.stringify(this.txtInfo));
  },
  head() {
    return {
      // title: this.txtInfo.title,
      // meta: [{ hid: "description", name: "blog", content: this.txtInfo.title }],
    };
  },
};
</script>
<style scoped lang="less">
/deep/h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: blod;
}

/deep/h1 {
  font-size: 32px;
}

/deep/h2 {
  font-size: 24px;
}

/deep/h3 {
  font-size: 18.72px;
}

/deep/h4 {
  font-size: 16px;
}

/deep/h5 {
  font-size: 13.28px;
}
/deep/h6 {
  font-size: 12px;
}
</style>
