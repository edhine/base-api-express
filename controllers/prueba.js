/**
 * Controlador Prueba
 * @author Edhine
 * 
 * @method POST prueba
 */
'use strict';

var PruebaModel = require('../models/PruebaModel');

/**
 * Metodo de prueba
 * @param {*} req 
 * @param {*} res 
 */
function prueba(req, res) {
    return res.json(JSON.parse(JSON.stringify(new PruebaModel())));
}

module.exports = {
    prueba
};