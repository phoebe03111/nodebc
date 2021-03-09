const numbers = require('./numbers');
const Logger = require('logplease');
const logger = Logger.create('utils');

const number1 = numbers(2);
logger.info(number1);

const number2 = numbers(3);
logger.info(number2);

const number3 = numbers(101);
logger.info(number3);

const number4 = numbers(201);
logger.info(number4);

const number5 = numbers(202);
logger.info(number5);

const number6 = numbers(100);
logger.info(number6);