import React from 'react';

import ButtonGol from './ButtonGol';

export default class Time extends React.Component{
    
    render(){
        return (
            <div>
                <h3>{this.props.nome}</h3>
                <h5>{this.props.gols}</h5>
                <ButtonGol setGol={this.props.setGol}/>
            </div>
        );
    }
}