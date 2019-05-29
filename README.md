# nodePulser
## EventEmitter cookbook code

Many of the core Node modules are EventEmitters, and also EventEmiters make an excellent
skeleton to implement asynchronous programming.

Here we are creating a "Pulser" object and consume its "pulse" events.
Calling 'pulse.on('pulse') sets up connections fro the "pulse" events to envoke the callback function.
It then calls the "start" method to get the process going.

Enter this into a fuke and name the file "pulse.js"
When you run it you should see the following output:

$ node pulser.js
19 Apr 16:58:04 - >>>> pulse
19 Apr 16:58:04 - pulse received
19 Apr 16:58:04 - <<<< pulse
19 Apr 16:58:05 - >>>> pulse
19 Apr 16:58:05 - pulse received
19 Apr 16:58:05 - <<<< pulse
19 Apr 16:58:06 - >>>> pulse
19 Apr 16:58:06 - pulse received
19 Apr 16:58:06 - >>>> pulse

