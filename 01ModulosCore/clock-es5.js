'use strict'

var Clock = (function(){
    var EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits;
    var Clock = function(){
        var self = this;
        setInterval(function(){
            self.emit('tictac');
        }, 1000)
    }
    inherits(Clock, EventEmitter);
    Clock.prototype.theTime = function(){
        var date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),

            min = min < 10 ? '0' + min : min;
            sec = sec < 10 ? '0' + sec : sec;
            hrs = hrs < 10 ? '0' + hrs : hrs; 
        console.log(hrs + ':' + min + ':' + sec)
    }
    return Clock;
})();

module.exports = Clock;