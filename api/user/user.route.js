const express = require('express');
const router = express.Router();
const controller = require('./user.controller.js');
const bodyParser = require('body-parser');

router.get('/home', controller.home);
router.get('/giocata/:par1/:par2/:par3', controller.numeriGiocati);
router.post('/signIn', controller.sign);
router.get('/estrazione', controller.estrai);

module.exports = router;
