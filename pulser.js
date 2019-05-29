var events = require('events');
var util = require('util');
//Define the Pulser object

function Pulser() {
    events.EventEmitter.call(this);
}
util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function() {
    setInterval (() => {
        util.log('>>>> pulse');
        this.emit('pulse');
        util.log('<<<< pulse');
    }, 1000);
};