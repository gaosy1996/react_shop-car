import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarItem extends Component {
    //购物车的item
    render() {
        let { id, tradeName, price, num, check } = this.props
        return (
            <>
                <li>
                    <br />
                    <h3>--- {tradeName} ---</h3>
                    <br />
                    <input type='checkbox' checked={check} onChange={this.clickItem} />
                    <br />
                    <b>价格：￥{price}</b>
                    <br />
                    <button onClick={() => { this.count('+') }}>+</button>
                    <br />
                    <b>数量：{num}</b>
                    <br />
                    <button onClick={() => { this.count('-') }}>-</button>
                    <br />
                    <button onClick={this.del.bind(this, id)}>---删除---</button>
                </li>
            </>
        );
    }
    //加减
    count = (flag) => {
        let { num, id } = this.props
        if (flag === '-') {
            num = num > 1 ? num - 1 : num
        } else {
            num = num + 1
        }
        this.props.countNum(num, id)
    }
    //删除
    del(id) {
        this.props.delFn(id)
    }
    //全选 单选
    clickItem = (e) => {
        let { id } = this.props
        this.props.checkItemFn(e.target.checked, id)
    }
}

export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {
            //删除
            delFn(id) {
                dispatch({ type: 'DELETE', id })
            },
            countNum(num, id) {
                dispatch({ type: 'COUNT_NUM', num, id })
            },
            checkItemFn(status, id) {
                dispatch({ type: "CHEAK_ITEM", status, id })
            }
        }
    }
)(CarItem);