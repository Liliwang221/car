<template>
  <div class="wrap">
    <scroll
      ref="scroll"
      :data="value"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <ul>
        <div
          v-for="(item, index) in value"
          :key="index"
          :data-bg="item.Url.replace('{0}',item.LowSize)"
          @click="showSwiper(index)"
        />
      </ul>
    </scroll>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import Scroll from "./better-scroll/scroll"
//引入背景图懒加载
import LazyLoad from "@/utils/lazyLoad"
export default {
  computed: {
    ...mapState({
      count: state => state.allcarimg.count,
      value: state => state.allcarimg.imageList,
      page: state => state.allcarimg.page
    }),
    pullDownRefreshObj: () => {
      return {
        threshold: 90,
        stop: 50,
        txt: "刷新成功"
      };
      
    },
    pullUpLoadObj: () => {
      return {
        threshold: 50,
        txt: {
          more: "加载更多",
          noMore: "没有更多数据了"
        }
      };
    }
  },
  watch: {
    pullDownRefreshObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullDown();
        } else {
          scroll.closePullDown();
        }
      },
      deep: true
    },
    pullUpLoadObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullUp();
        } else {
          scroll.closePullUp();
        }
      },
      deep: true
    }
  },
  components: {
    Scroll
  },
  methods: {
    ...mapActions({
      getImageTypeList: "allcarimg/getImageTypeList",
      refreshDispatch: "allcarimg/getImageTypeList",
      loadMoreDispatch: "allcarimg/getImageTypeList"
    }),
    ...mapMutations({
      setCurrent: "allcarimg/setCurrent",
      setshowImageSwiper:"allcarimg/setshowImageSwiper"
    }),
    async onPullingDown() {
      await this.refreshDispatch(1);
    },
    async onPullingUp() {
      await this.loadMoreDispatch(this.page + 1);
    },
    showSwiper(index) {
      // 显示轮播
      this.setshowImageSwiper(true)
      this.$emit("update:showImageSwiper", true);
      // 修改current
      this.setCurrent(index);``
    }
  },
  async mounted() {
    await this.getImageTypeList();
    new LazyLoad(".wrap");
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul div {
  display: inline-block;
  width: 32.7vw;
  height: 32.7vw;
  margin-bottom: 1vw;
  background-size: cover;
  background-position: center;
  background-color: #eee;
}
</style>