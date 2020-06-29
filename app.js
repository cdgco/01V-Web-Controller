var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var JZZ = require("jzz");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
var outPort;
app.use("/assets", express.static(__dirname + '/assets'));

function connectOutport(input, output, port) {
    var returncode = 0;
    var outPort = JZZ()
        .or("Cannot start MIDI engine!")
        .openMidiOut([output, 0]).or(function() { returncode = 1; });
    var inPort = JZZ()
        .or("Cannot start MIDI engine!")
        .openMidiIn([input, 0]).or(function() { returncode = 1; });

    io.on("connection", (socket) => {
        socket.on("fader change", (note, value) => {
            outPort.control(0, note, value);
            io.emit("fader change", note, value);
        });
        inPort.connect(function(msg) {
            io.emit("fader change", msg[1], msg[2]);
        });
    });

    http.listen(port);
    return returncode;
}
module.exports = { connectOutport };