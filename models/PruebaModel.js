/**
 * Modelo Prueba
 * @author Edhine - Sergio Andrés Orellana Roa
 */
'use strict';

module.exports = class PruebaModel {
    constructor() {
        this.ok = true;
        this.msg = 'Este es un mensaje de prueba';
    }

    display() {
        console.log(this.ok + " " + this.msg);
    }
}