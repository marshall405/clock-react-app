import React from 'react';
import '../styles/Digital.css';
export class Digital extends React.Component {
    render() {
        return (
            <div className='clock-container flex digital' onClick={this.props.onClick}>
                    <h6 className='date'> {this.props.date} </h6>  
                    <div className='flex digital-time'>    
                        <div className='flex time-background'>             
                            <h6>{this.props.hour}</h6>
                            <h6> : </h6>
                            <h6>{this.props.min}</h6>
                            <h6> : </h6>
                            <h6>{this.props.sec}</h6>
                            <h6>{this.props.period}</h6>
                        </div>
                    </div>
                </div>
        )
    }
}