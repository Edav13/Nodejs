'use strict'

class Clock {

    constructor() {
        setInterval(() => {
            this.theTime();
        }, 1000);
    }
    
    theTime() {
        var date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var am = hrs > 11 ? 'p.m.' : 'a.m.';
            hrs = hrs > 11 ? hrs - 12 : hrs;
            min = min < 10 ? '0' + min : min;
            sec = sec < 10 ? '0' + sec : sec;
            hrs = hrs < 10 ? '0' + hrs : hrs;

        console.log(`${hrs}:${min}:${sec} ${am}`);
    }
}

module.exports = Clock;