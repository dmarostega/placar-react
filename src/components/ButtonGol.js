import React from 'react';

export default class ButtonGol extends React.Component{
    render(){
        return (<button onClick={this.props.setGol}>Goool</button>)
    }
}