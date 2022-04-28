/**
 * Route : cats
 */

const {Router, json} = require('express');
const catsRouter = new Router();
catsRouter.use(json());

// Test data
const cats = [
  {id: 1, name: 'Persan', description: 'Blue eyes'},
  {id: 2, name: 'Munchkin', description: 'Short legs'},
  {id: 3, name: 'Ragdoll', description: 'Long hair'},
  {id: 4, name: 'British shorthair', description: 'Not so short hair'},
];

module.exports = {catsRouter, cats};
