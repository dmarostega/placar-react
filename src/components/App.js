/*  BOOTSTRAP FILE  */

import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados={
            partida:{
                estadio:"Maracana/RJ",
                data:"01/01/2018",
                horario:"19h"
            },
            timeCasa:{
                    nome: "Grêmio"
            },
            timeVisitante:{
                nome:"Internacional"
            }
        }

export default class App extends React.Component {
    render(){
        return <PlacarContainer partida={dados.partida}
                                timeCasa={dados.timeCasa}
                                timeVisitante={dados.timeVisitante}
                                />;
    }
}