import React from 'react';

import Time from './Time';

import Partida from './Partida';

export default class PlacarContainer extends React.Component{
    constructor(){
        super();
        this.state={
            gols_casa:0,
            gols_visitante:0
        }
    }
    setGolCasa(){
                this.setState({
                    gols_casa: this.state.gols_casa+1
                });
    }
    
    setGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante+1
        });       
    }
    render(){
        return(
            <div style={{   
                        borderColor:"black", 
                        borderWidth:"2px",
                        borderStyle:"solid",
                        padding:"15px",
                        width: "400px",
                        margin:"auto"}}>
                <div style={{float: "left", marginRight: "20px"}}>
                    <h3>Casa</h3>    
                    <Time   nome={this.props.timeCasa.nome} 
                            gols={this.state.gols_casa}
                            setGol={this.setGolCasa.bind(this)}/>
                </div>
                <div style={{float: "left", marginRight: "20px"}}>
                    <Partida estadio={this.props.partida.estadio}
                             data={this.props.partida.data}
                             horario={this.props.partida.horario}/>
                </div>
                <div style={{float: "left", marginRight: "20px"}}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.timeVisitante.nome} 
                          gols={this.state.gols_visitante} 
                          setGol={this.setGolVisitante.bind(this)}/>
                </div>
            <div style={{clear:"both"}} ></div>
            </div>
        );
    };
}