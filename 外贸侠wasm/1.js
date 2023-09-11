const wasm2js = require('wasm2js');
const fs = require('fs');


const wasmBuffer  = fs.readFileSync("main.wasm");
const js = wasm2js(wasmBuffer);


fs.writeFile("result.js", js, (err) => {});