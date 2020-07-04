![01V Web Controller](https://i.ibb.co/0YmKh9b/IMG-9989.jpg)  | ![01V Web Controller](https://i.ibb.co/LPYn07J/IMG-9992.jpg)
:-------------------------:|:-------------------------:|
|||




## Mixer Setup

1. Enable Midi Control Change Rx & Tx
2. Set Rx & Tx channel to 1
3. Set MIDI port to MIDI
4. Intitalize your Yamaha 01V MIDI Control Change Table in 03D mode.
5. Add the following MIDI Control Change paramaters:
   * CC 13 -> Fader -> Channel -> 15-16
   * CC 14 -> On -> Channel -> 15-16
   * CC 15 -> Pan -> Channel -> 15
   * CC 16 -> Pan -> Channel -> 16
   * CC 50 -> On -> Master -> Bus 1
   * CC 51 -> On -> Master -> Bus 2
   * CC 52 -> On -> Master -> Bus 3
   * CC 53 -> On -> Master -> Bus 4

## Host Software Setup
You can either install 01V Web Controller directly from NPM, or clone it from GitHub. 

01V works on any system that has Node.js. Get it here: https://nodejs.org/.

### NPM Install
```
npm i @cdgco/01v-web-controller
cd node_modules/@cdgco/01v-web-controller
npm start
```

### GitHub Install
```
git clone git://github.com/cdgco/01v-web-controller
cd 01v-web-controller
npm start
```

## Usage
After launching 01V Web Controller, you will be shown a configuration window where you can choose your MIDI input, MIDI output and Web Server Port.
Simply choose the options corresponding to your Yamaha 01V and your desired web port.

The first time you launch the app, it will ask permission to start the web server, choose to allow firewall access.

You will then be given a URL for remote access as well as an option to open the desktop controller.

01V Web Controller works on touch screens (supports multitouch) and works best as a mobile web app for phones, simply open the remote address, and add the shortcut to your home screen.

Tip: To easily reset pan pots to the default value, click on the channel name while on the pan page.
