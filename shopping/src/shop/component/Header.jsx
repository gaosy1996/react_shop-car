import React, { Component } from 'react';

class Header extends Component {
    static defaultProps = {
        title: '零食商贩'
    }
    render() {
        let { title } = this.props
        return (
            <div className='header'>
                <h3>{title}</h3>
            </div>
        );
    }
}

export default Header;