import React, { Component } from 'react';
import HomeStyle from '../css/HomeStyle.css';
import moment from 'moment';

class DataTitle extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
          <div className="globaltext">{this.props.title}</div>
          <div>{moment(this.props.data.Date).format('MMMM Do YYYY, h:mm:ss a')}</div>
          </div>
        )
    }
}

export default DataTitle
