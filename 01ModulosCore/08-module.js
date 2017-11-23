'use strict'

var myData = require('./my-data');
var Clock = require('./clock-es5');
var cucu = new Clock();

console.log(myData);

cucu.on('tictac', function(){
    cucu.theTime();
});