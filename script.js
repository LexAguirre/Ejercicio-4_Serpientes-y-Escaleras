"use strict";

import Player from "./jugador.js";

let P1 = new Player("RAY");
let P2 = new Player("ALEX");

export default class SyE{
    
    dado(){
        let dado = Math.ceil(Math.random() * 6);
        return dado;
    }

    tablero(){
        
        let i = 0;

        while (P1.get_Position() < 100 && P2.get_Position() < 100){
            
            i = i + 1;
            console.log(`${i}° Ronda`)

            P1.set_Position(this.dado());
            this.snake("one");
            this.ladder("one");
            console.log(P1.get_Position());
            P2.set_Position(this.dado());
            this.snake("two");
            this.ladder("two");
            console.log(P2.get_Position());

            if(P1.get_Position() >= 100){
                return (`El Ganador es ${P1.get_Name()}!!!`);
            } else if(P2.get_Position() >= 100){
                return (`El Ganador es ${P2.get_Name()}!!!`);
            }
        }

    }
    
    whichPlayer(player){
        let gamer;
        if(player === "one"){
            gamer = P1
            return gamer; 
        } else if(player === "two"){
            gamer = P2
            return gamer;
        }
    }

    snake(player){
        let playersGame = this.whichPlayer(player);
        
        switch(playersGame.get_Position()){
            case 40:
                playersGame.set_Position(19 - 40);
                break;
            case 55:
                playersGame.set_Position(7 - 55);
                break;
            case 67:
                playersGame.set_Position(21 - 67);
                break;
            case 79:
                playersGame.set_Position(43 - 79);
                break;
            case 83:
                playersGame.set_Position(50 - 83);
                break;
            case 92:
                playersGame.set_Position(64 - 92);
                break;
            case 97:
                playersGame.set_Position(72 - 97);
                break;
            case 99:
                playersGame.set_Position(86 - 99);
                break;
        }
    }

    ladder(player){
        let playersGame = this.whichPlayer(player);
        
        switch(playersGame.get_Position()){
            case 3:
                playersGame.set_Position(52 - 3);
                break;
            case 7:
                playersGame.set_Position(90 - 7);
                break;
            case 12:
                playersGame.set_Position(59 - 12);
                break;
            case 14:
                playersGame.set_Position(20 - 14);
                break;
            case 18:
                playersGame.set_Position(39 - 18);
                break;
            case 47:
                playersGame.set_Position(80 - 47);
                break;
            case 56:
                playersGame.set_Position(89 - 56);
                break;
            case 62:
                playersGame.set_Position(96 - 62);
                break;
        }
    }

}



