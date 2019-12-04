import { getdetailList} from "../../services/index"

//定义一个list数据
const state = {
    del: {}, 
    current: '全部',// 当前选择年份 
    year: ['全部'], // 所有的年份
    currentList: [],// 当前年份的车款数据  
}

// 给车款排序
// function sortCarList(list) {
//    list.sort((a, b) => {
//         if (a.exhaust_str == b.exhaust_str) {
//             if (a.max_power_str == b.max_power_str) {
//                 return b.inhale_type > a.inhale_type;
//             } else {
//                 return a.max_power - b.max_power;
//             }
//         } else {
//             return a.exhaust - b.exhaust;
//         }
//     })
//     return list;
// }

// // 格式化数据
// function formatCarList(list) {
//     list = list.map(item => {
//         item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
//         return item;
//     })
//     let newList = [];

//     // 遍历
//     list.forEach(item => {
//         let index = newList.findIndex(value => value.key == item.key);
//         if (index !== -1) {
//             newList[index].list.push(item);
//         } else {
//             newList.push({
//                 key: item.key,
//                 list: [item]
//             })
//         }
//     })
//     return newList;
// }


const mutations = {
     upList(state, payload) {
    //     if (payload.code == 1) {
           state.del = payload
    //       //拿到年份
    //         let year = payload.data.list.map(item => item.market_attribute.year);
    //         state.year = state.year.concat([...new Set(year)]);

    //         // 拿到当前选择年份的数据
    //         let currentList = [];
    //         if (state.current == '全部') {
    //             currentList = payload.data.list;
    //         } else {
    //             currentList = payload.data.list.filter(item => item.market_attribute.year == state.current);
    //         }

    //         // 给当前年份数据排序
    //         currentList = sortCarList(currentList);

    //         // 聚合key相同的车款数据
    //         currentList = formatCarList(currentList);
    //         state.currentList = currentList;
    //         console.log(currentList)
    //     } else {
    //         alert(payload.msg)
    //     }
    }
}

const actions = {
    async getdetailList({ commit }, payload) {
        let res = await getdetailList(payload)

        commit("upList", res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

