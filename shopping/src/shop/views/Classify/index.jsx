import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import axios from 'axios';
import '../../mock';
import Item from '../../component/Item';

class Classify extends Component {
    state = {
        shopList: [],
        currentIdx: 0
    }
    render() {
        let { shopList, currentIdx } = this.state
        return (
            <div>
                <Header title='分类' />
                <section>
                    <div className='clibox'>
                        <ul className='left'>
                            {
                                shopList && shopList.map((item, index) =>
                                    <li key={index}
                                        className={currentIdx === index ? 'deeppink' : null}
                                        onClick={() => {
                                            this.setState({
                                                currentIdx: index
                                            })
                                        }}
                                    >{item.type}</li>
                                )
                            }
                        </ul>
                        <div className='right'>
                            {
                                shopList[currentIdx] && shopList[currentIdx].list.map((item, index) =>
                                    <Item key={item.id} item={item} id={item.id} />
                                )
                            }
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        axios.get('/api/shopList').then(res => {
            this.setState({
                shopList: res.data
            })
        })
    }
}

export default Classify;