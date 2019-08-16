/*********************************************************************************************
 *                                      Variables [AMBIENTE]
 *                          @author Edhine - Sergio Andrés Orellana Roa
 ********************************************************************************************/
'use strict';

/**
 * [process.env] [NODE_ENV]
 * @description Variable de ambiente
 * 
 * **dev**
 * **qa**
 * **production**
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * [process.env] [PORT_WEB]
 * @description Puerto A Exponer
 * 
 * **Puerto 3000** => Defecto
 */
process.env.PORT_WEB = process.env.PORT_WEB || 3000;