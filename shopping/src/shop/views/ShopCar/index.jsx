import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { connect } from 'react-redux';
import CarItem from '../../component/CarItem';

class ShopCar extends Component {
    render() {
        let { carList, checkAll } = this.props
        return (
            <div>
                <Header />
                <section>
                    <ul>
                        {
                            carList && carList.map(item => <CarItem key={item.id} {...item} />)
                        }
                    </ul>
                    <div>
                        <b>全选</b>:<input type='checkbox' checked={checkAll} onChange={(e) => {
                            this.props.checkAllFn(e.target.checked)
                        }} />
                        <b>总钱数：{this.props.total}</b>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default connect(
    (state) => {
        let total = state.carReducer.carList.reduce((prev, cur) => {
            console.log(cur)
            prev += cur.check ? cur.price * cur.num : 0;
            return prev
        }, 0)
        return {
            carList: state.carReducer.carList,
            checkAll: state.carReducer.checkAll,
            total
        }
    },
    (dispatch) => {
        return {
            checkAllFn(status) {
                dispatch({ type: "CHEAK_ALL", status })
            }
        }
    }
)(ShopCar);