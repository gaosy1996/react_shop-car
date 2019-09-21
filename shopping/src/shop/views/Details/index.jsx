import React, { Component } from 'react';
import Header from '../../component/Header';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        let { item } = this.props.location.params
        return (
            <div>
                <Header />
                <section>
                    <ul>
                        {
                            <li>
                                <br />
                                <h3>---{item.tradeName}---</h3>
                                <br />
                                <b>价格：---￥{item.price}---</b>
                                <br />
                                <button onClick={() => { this.count('+') }}>+</button>
                                <br />
                                <b>数量：---{item.num}---</b>
                                <br />
                                <button style={{ display: item.num > 1 ? 'block' : "none" }} onClick={() => { this.count('-') }}>-</button>
                                <button onClick={this.addCar.bind(this, item)}>---加入购物车---</button>
                                <br />
                                <button onClick={this.back.bind(this)}>---返回---</button>
                            </li>
                        }
                    </ul>
                </section>
            </div>
        );
    }
    //计算数量
    count = (flag) => {
        let { item } = this.props.location.params
        console.log(item)
        let { num } = this.props.location.params.item
        console.log(num)
        if (flag === '-') {
            item.num = num - 1
        } else {
            item.num = num + 1
        }
        //更新数据
        this.setState({
            item
        })
    }
    //点击加入购物车
    addCar(item) {
        item.check = false;
        this.props.addCarFn(item)
    }
    //返回上一级
    back() {
        this.props.history.go(-1)
    }
}

export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {
            addCarFn(goods) {
                dispatch({ type: "ADD_CAR", goods })
            }
        }
    }
)(Details);