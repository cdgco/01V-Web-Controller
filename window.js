$(() => {
    var navigator = require("web-midi-api");
    const ipc = require('electron').ipcRenderer;
    let ipcRenderer = require('electron').ipcRenderer;

    var inputs, outputs, midi;
    var inDevices = [];
    var outDevices = [];

    function onMIDISuccess(midiAccess) {
        midi = midiAccess;
        inputs = midi.inputs;
        outputs = midi.outputs;
        inputs.forEach(function(port) {
            inDevices.push(port.name);
        });
        outputs.forEach(function(port) {
            outDevices.push(port.name);
        });
        addElements();
    }

    navigator.requestMIDIAccess().then(onMIDISuccess);

    function addElements() {
        outDevices.forEach(function(device) {
            $("#setup-outputs").append('<option>' + device + "</option>");
        });

        inDevices.forEach(function(device) {
            $("#setup-inputs").append('<option>' + device + "</option>");
        });

        document.querySelectorAll("input[type=radio][name=input]").forEach((item) => {
            item.addEventListener("change", (event) => {
                var selectedInput = document.querySelector('input[name="input"]:checked').value;
                document.getElementById("setup-inputs").style.display = "none";
                document.getElementById("setup-outputs").style.display = "block";
            });
        });
        document
            .querySelectorAll("input[type=radio][name=output]")
            .forEach((item) => {
                item.addEventListener("change", (event) => {
                    var selectedOutput = document.querySelector('input[name="output"]:checked').value;
                    document.getElementById("setup-forms").style.display = "none";
                    document.getElementById("setup-info").style.display = "block";
                });
            });
    }


    document.getElementById('ipcForm').addEventListener('submit', (evt, input, output, port) => {
        var input = document.getElementById('setup-inputs').value;
        var output = document.getElementById('setup-outputs').value;
        var port = document.getElementById('port').value;
        ipcRenderer.send('input-broadcast', input, output, port);
    });
});