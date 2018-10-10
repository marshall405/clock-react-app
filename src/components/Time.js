import React from 'react';
import '../styles/Time.css';

import { Digital } from './Digital';
import { Analog } from './Analog';
export class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hour: '',
            standardHour: '',
            min: '',
            standardMin: '',
            sec: '',
            standardSec: '',
            period: 'pm',
            digital: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        this.updateTime();
        setInterval( () => this.updateTime(), 1000);
    }
    updateTime() {
        const date = new Date();
        let stringDate = date.toLocaleDateString();
        let hour = date.getHours();
        let standardHour = hour > 12 ? hour - 12 : hour;
        if(hour === 0) standardHour = '12';
        let min = date.getMinutes();
        let standardMin = min < 10 ? '0' + min : min;
        let sec = date.getSeconds();
        let standardSec = sec < 10 ? '0' + sec : sec;
        let period = hour > 12 ? 'pm' : 'am';
        
        this.setState({
            date: stringDate,
            hour: hour,
            standardHour: standardHour,
            min: min,
            standardMin: standardMin,
            sec: sec,
            standardSec: standardSec,
            period: period
        });
    }
   
    handleClick() {
        const isDigital = this.state.digital ? false : true;
        this.setState({digital: isDigital});
    }
    
    render() {
        if(this.state.digital){
            return <Digital 
                        date={this.state.date}
                        hour={this.state.standardHour} 
                        min={this.state.standardMin} 
                        sec={this.state.standardSec} 
                        period={this.state.period}
                        onClick={this.handleClick}
                    />
        }
        return <Analog 
                    date={this.state.date}
                    hour={this.state.hour} 
                    min={this.state.min} 
                    sec={this.state.sec} 
                    period={this.state.period}
                    onClick={this.handleClick}
                />
    }   
}

