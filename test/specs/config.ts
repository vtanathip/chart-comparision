const config = require('config');
const username = config.get('tradingview.username');
const password = config.get('tradingview.password');


console.log(`Username ${username} and Password is ${password}`);