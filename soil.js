// serial setup

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyACM0')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))


// cabal setup

var Headless = require('cabal-headless')

//var key = 'cabal://dbba51816be0a6199a769f96726621398d81db6faca829012f79c3c2d8d5f529'

var key = 'cabal://0201400f1aa2e3076a3f17f4521b2cc41e258c446cdaa44742afe6e1b9fd5f82'

var opts = {}

var cabalkey = key.replace("cabal://", "").replace("cbl://", "")

var headless = Headless(cabalkey, { temp: opts.temp || false })

headless.nick('cabalbot')

headless.connect() // connect to the cabal's swarm

var current_channel = "bots"
/*
headless.onPeerConnected(function (peer) {
    console.log("peer connected")
    port.write('HELP\n') //write to serial port

})
*/

headless.onMessageReceived(function (msg) {

    // log our new message to the console

    console.log("new message", msg)
    var txt = msg.value.content.text
    current_channel = msg.value.content.channel
    var parts = txt.split(" ")
    
    
    if (parts[0]=="@cabalbot") {

        // assume message if of form "@cabalbot ON" or "@cabalbot OFF"
        var modality = parts[1];
        
        var index = txt.indexOf(" ")
        console.log(index)
        var command=txt.slice(index+1,txt.length)
        console.log(command)
        port.write(command.concat('\n')) //write to serial port
        

	}
	
	
})

parser.on('data', function (data) {

    console.log('Data:', data)

    headless.post({
        messageType: "chat/text",
        channel: current_channel,
        message: data
    })

})


