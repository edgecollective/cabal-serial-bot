# cabal-serial-test


## Usage

You can use ```@cabalbot``` to control / get info from an Arduino connected to the serialport.

Type ```@cabalbot HELP``` into a cabal to see a list of commands -- the @cabalbot will do your bidding!


## Installation

### Installing Node packages

Install ```cabal-headless``` and ```serialport``` via npm:

```
npm install cabal-headless
npm install serialport
```

### Installing Microcontroller code

Load the code in ```soil_bot_firmware``` onto an Arduino-compatible device.

You'll also need to install the [Arduino-SerialCommand](https://github.com/p-v-o-s/Arduino-SerialCommand) library.

After installing the library and loading the firmware, note what serialport the Arduino ends up on; this is hard-coded into ```soil.js``` on line 5 (you should change it to match your system):

```
const port = new SerialPort('/dev/ttyACM0')
```

### Setting up the Cabal

The cabal key for the bot is also hard-coded into ```soil.js``` on line 16 (change it to match your cabal):

```
var key = 'cabal://0201400f1aa2e3076a3f17f4521b2cc41e258c446cdaa44742afe6e1b9fd5f82'
```







