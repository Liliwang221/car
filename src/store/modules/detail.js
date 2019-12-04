import {getdetailList} from "@/services/index"
const state={
    detailList:{},//原数据
    // current:"全部",//当前选择年份
    // year:["全部"],//所有的年份
    // currentList:[]//当前年份的车款数据
}
//给车款排序
// function sortCarList(list){
//     //排序规则  排量升序&&功率升序&&自然吸气>涡轮增压
//     list.sort((a,b)=>{
//         if(a.exhaust_str==b.exhaust_str){
//             if(a.max_power_str==b.max_power_str){
//                 return b.inhale_type > a.inhale_type;
//             }else{
//               return a.max_power_str - b.max_power_str
//             }
//         }else{
//             return a.exhaust_str - b.exhaust_str
//         }
//     })
//     return list
// }
// //格式化数据
// function formatCarList(list){
//     //拼接每款车的key 排量/功率 吸气方式
//     list=list.map(item=>{
//         item.key=`${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`
//         return item
//     })
//     let newList=[];
//  // 遍历，根据key把数据聚合一下
//     list.forEach(item=>{
//         let index=newList.findIndex(value=>value.key==item.key)
//         if(index!==-1){
//             newList.push({
//                 key:item.key,
//                 list:[item]
//             })
//         }
//     })
//     return newList
// }


const mutations={
    setdetailList(state,payload){
       let num=payload.list.sort((a,b)=>{
            return a.max_power_str - b.max_power_str
        })
        console.log(num)
        state.detailList=payload
    //     if(payload.code==1){
    //         state.detailList=payload.data
    //          /** 处理数据 */
    //         // 1.拿到年份
    //         let year=payload.data.list.map(item=>item.market_attribute.year);
    //         state.year=state.year.concat([...new Set(year)])
    //         // 2.拿到当前选择年份的数据
    //         let currentList=[];
    //         if(state.current=="全部"){
    //             currentList=payload.data.list
    //         }else{
    //             currentList=payload.data.list.filter(item=>item.market_attribute.year==state.current)
    //         }
    //         // 3.给当前年份数据排序
    //         currentList=sortCarList(currentList)
    //         // 4.聚合key相同的车款数据
    //         currentList=formatCarList(currentList)
    //         state.currentList=currentList;
    //         console.log("currentList....",currentList)
    //     }else{
    //         alert(payload.msg)
    //     }
        
     }
}
const actions={
    async getdetailList({commit},payload){
        let res=await getdetailList()
        console.log(res.data.data)
        payload=res.data.data
        commit("setdetailList",payload)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}