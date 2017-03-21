'use strict';

let net = require('net');
let client = new net.Socket();

const PORT = process.env.PORT; 
const ADDRESS = process.env.ADDRESS; 

if (!PORT || !ADDRESS) {
  console.log("PORT and ADDRESS must be specified");
  process.exit(127);
}

client.connect(PORT, ADDRESS, () => {
	console.log('Connected successfully');
  process.exit(0);
});

client.on('error', () => {
  console.log("Connection errored");
  process.exit(1);
});

