import React from 'react';
import './Time.css';


export class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hour: '',
            min: '',
            sec: '',
        }
        this.getDate = this.getDate.bind(this);
    }
    
    componentDidMount() {
        this.updateTime();
        setInterval( () => this.updateTime(), 1000);
    }
    updateTime() {
        const date = new Date();
        let stringDate = date.toLocaleDateString();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
       
        this.setState({
            date: stringDate,
            hour: hour,
            min: min,
            sec: sec,
        });
    }
   
    getDate() {
        const date = new Date();
        return date.toLocaleDateString();
      }
    //   move 1 deg, 360 times, in 60 seconds
    //   width 300
    
    
    render() {
        return (
            <div className='clock-container flex'>
                <div className='flex' style={{width: '100%', height: '100%', position: 'relative', fontSize:60}}>
                    <h6 style={{margin: 0, position: 'absolute', top: 5}}>12</h6>
                    <h6 style={{margin: 0, position: 'absolute', right: 5}}>3</h6>
                    <h6 style={{margin: 0, position: 'absolute', bottom: 5}}>6</h6>
                    <h6 style={{margin: 0, position: 'absolute', left: 5}}>9</h6>
                </div>
                <div className='inner-clock flex'>
                    <span className='middle-dot'></span>
                    <span style={{ transform: `rotate(${this.state.sec * 6}deg)`}}
                        className='seconds'>
                    </span>
                    <span   style={{ transform: `rotate(${this.state.min * 6}deg)`}} 
                            className='minutes'>
                    </span>
                    <span   style={{ transform: `rotate(${this.state.hour * 30}deg)`}} 
                            className='hours'>
                    </span>
                </div>
            </div>
        )
    }   
}

