import React from 'react';
import '../styles/Analog.css';
export class Analog extends React.Component {
    render() {
        return (
            <div className='clock-container flex analog' onClick={this.props.onClick}>
                <div className='flex hand' style={{width: '100%', height: '100%', position: 'relative', fontSize:60}}>
                    <h6 style={{top: 5}}>12</h6>
                    <h6 style={{right: 5}}>3</h6>
                    <h6 style={{bottom: 5}}>6</h6>
                    <h6 style={{left: 5}}>9</h6>
                    <h6 className='analog-date date-period' style={{left: 35, top: 75}}>{this.props.date}</h6>
                    <h6 className='date-period' style={{left: 200, top: 200}}>{this.props.period}</h6>
                </div>
                <div className='inner-clock flex'>
                    <span className='middle-dot'></span>
                    <span style={{ transform: `rotate(${this.props.sec * 6}deg)`}}
                        className='seconds hand'>
                    </span>
                    <span   style={{ transform: `rotate(${this.props.min * 6}deg)`}} 
                            className='minutes hand'>
                    </span>
                    <span   style={{ transform: `rotate(${this.props.hour * 30}deg)`}} 
                            className='hours hand'>
                    </span>
                </div>
            </div>
        )
    }
}