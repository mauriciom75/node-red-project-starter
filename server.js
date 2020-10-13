#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;
const open = require('open');
const fs = require('fs'); 

var args = process.argv;
var settings = process.env.NR_SETTINGS_FILE || "/nr_conf/settings.js"
if (args.find(a => a === '-f')) { const npm_install = exec('npm install -f'); }


fs.copyFile("/nr_conf/flows.json", "./flows.json", (err) => { 
  if (err) { 
    console.log("warning: Archivo no encontrado:", err); 
  } 
  else { 
  
      if (settings) { spawn('node', ['node_modules/node-red/red.js', '-s', settings, '-userDir', '.'], {stdio:'inherit'}); }
      else { spawn('node', ['node_modules/node-red/red.js', '-userDir', '.'], {stdio:'inherit'}); }
 
  } 
}); 


(async () => { await open('http://localhost:'+ '1880'); })();
