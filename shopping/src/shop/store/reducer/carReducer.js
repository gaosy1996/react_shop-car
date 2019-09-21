const carReducer = (state = { carList: [], checkAll: false }, action) => {
    let { carList } = state;
    switch (action.type) {
        //添加
        case "ADD_CAR": {
            let { goods } = action;

            let ind = carList.findIndex(item => item.id === goods.id);

            if (ind !== -1) {
                carList[ind].num += goods.num
            } else {
                carList.push(goods)
            }

            return { ...state, carList: [...carList] }
        }
        //删除
        case "DELETE": {

            let { id } = action;

            let ind = carList.findIndex(item => item.id === id);

            carList.splice(ind, 1);

            return { ...state, carList: [...carList] };
        }
        //加减
        case "COUNT_NUM": {

            let { num, id } = action;

            let ind = carList.findIndex(item => item.id === id);

            carList[ind].num = num;

            return { ...state, carList: [...carList] };
        }
        //全选
        case "CHEAK_ALL": {

            let { status } = action;

            state.checkAll = status;

            carList.forEach(item => {
                item.check = status;
            });

            return { ...state, carList: [...carList] };
        }
        //单选
        case "CHEAK_ITEM": {

            let { status, id } = action;

            let ind = carList.findIndex(item => item.id === id);

            carList[ind].check = status;

            state.checkAll = carList.every(item => item.check)

            return { ...state, carList: [...carList] }
        }

        default:
            return state
    }
}

export default carReducer