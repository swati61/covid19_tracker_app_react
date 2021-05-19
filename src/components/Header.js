import React, { Component } from 'react';
import HeaderStyle from '../css/HeaderStyle.css';

class Header extends Component{
    render(){
        return (
            <div>
                <div className="HeaderStyle"><i className="fa fa-viruses"></i><span> Covid-19 Tracker </span>
                <p className="SubHading">API by <a href="https://covid19api.com" target="_blank">covid19api.com</a></p></div>
            </div>
        );
    }
}

export default Header
