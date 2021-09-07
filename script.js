"use strict";

import Player from "./jugador.js";

export default class SyE{
    constructor(){
        this.test = false;
    }

    dado(){
        let dado = Math.ceil(Math.random() * 6);
        return dado;
    }

    tablero(){
        let P1 = new Player("RAY");
        let P2 = new Player("ALEX");
        let i = 0;

        while (P1.get_Position() < 100 && P2.get_Position() < 100){
            
            i = i + 1;
            console.log(`${i}° Ronda`)

            P1.set_Position(this.dado());
            console.log(P1.get_Position());
            P2.set_Position(this.dado());
            console.log(P2.get_Position());

            if(P1.get_Position() >= 100){
                return (`El Ganador es ${P1.get_Name()}!!!`);
            } else if(P2.get_Position() >= 100){
                return (`El Ganador es ${P2.get_Name()}!!!`);
            }
        }
    }
    
}



