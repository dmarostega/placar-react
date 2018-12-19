import React from 'react';

export default class ButtonGol extends React.Component{
            /*por padrão função recebe parametro event */
    handleClick(event){
        /*Desabilita função padrão do botão*/
        event.preventDefault();
        this.props.setGol();
    }
    render(){
          return (<button 
                    onClick={this.handleClick.bind(this)}>
                    Goool
                </button>)    
      /*ASSIM TAMBÉM FUNCIONOU 
      
        return (<button onClick={this.props.setGol}>Goool</button>)*/
    }
}