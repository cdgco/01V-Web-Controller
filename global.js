#!/usr/bin/env node

const shell = require('shelljs')
console.log("Launching 01V Web Controller...\n");
shell.exec(`npm start --prefix "${__dirname}"`, { silent: true })