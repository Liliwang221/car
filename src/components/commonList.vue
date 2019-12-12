<template>
<!--    
     /**
        * list 下拉刷新 加载更多
        * @props {
        *   list: {
        *     query?: {[key:string]:any}, 查询条件
        *     limit?: number, 每次查询的数量 默认10
        *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
        *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
        *     loadMoreDispatch: string loadMore 查询的store dispacthName
        *     value: Array<{[key:string]:any}> 查询结果
        *   }
        * }
        * slotName: 'item' 显示列表项
     */ -->
    <div class="container">
        <div>
            <p class="top-tip">正在刷新中...</p>
            
            <slot :value="list.value"></slot>

            <!-- 底部动画 -->
            <div class="pullup-wrapper">
                <div class="before-trigger" v-if="!isPullUpLoad">
                    <span>上拉加载更多</span>
                </div>
                <div class="after-trigger" v-else>
                    <span>正在加载中...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
 data(){
        return {
            isPullUpLoad: false
        }
    },
    props: {
        list: {
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    watch: {
        'list.value': function(newVal, oldVal){
            if (newVal !== oldVal){
                this.scroll.refresh();
            }
        }
    },
    methods: {
        refreshDispatch(page){
            this.$store.dispatch(this.list.refreshDispatch, page)
        },
        loadMoreDispatch(page){
            this.$store.dispatch(this.list.loadMoreDispatch, page)
        }
    },
mounted(){
  this.scroll=new BScroll(".wrap",{
        scrollY:true,
        pullUpLoad:{
            threshold:50
        },
        pullDownRefresh:{
            threshold:50,
            stop:20
        },
         click:true
    }),
    this.scroll.on('pullingUp', async ()=>{
            // 判断是否加载完全部数据
            if (this.list.count == this.list.value.length){
                return;
            }

            if (this.isPullUpLoad){
                return;
            }
            this.isPullUpLoad = true;
            await this.loadMoreDispatch(this.list.query.page+1);
            this.scroll.finishPullUp();
            this.isPullUpLoad = false;
        })
        this.scroll.on('pullingDown', async ()=>{
            await this.refreshDispatch(1);
            this.scroll.finishPullDown();
        })
    },
}
</script>

<style scoped>
    .wrap{
        width:100%;
        height:100%;
        overflow-y: scroll;
    }
    .wrap>div{
        height:2000px;
        background:sienna;
    }
</style>