"use strict";

export default class Player{
    constructor(name){
       this.name = name;
       this.position = 0; 
    }

    get_Name() { 
        return this.name;
    }

    get_Position(){
        return this.position;
    }

    set_Position(diceRoll){
        this.position = this.position + diceRoll;
    }
    
}