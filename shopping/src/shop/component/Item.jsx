import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Item extends Component {
    //右边数据的item组件
    render() {
        let { item, id } = this.props
        return (
            <>
                <li onClick={this.clickDetails.bind(this, item, id)}>{item.tradeName}</li>
            </>
        );
    }
    //通过id跳详情
    clickDetails(item, id) {
        this.props.history.push({
            pathname: '/details/' + id,
            params: {
                item: item
            }
        })
    }
}

export default withRouter(Item);