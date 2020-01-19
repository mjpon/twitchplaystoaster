const tmi = require('tmi.js');

// Define JSON File
var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("commands.json");
// Define to JSON type
console.log("\n *Fetched commands* \n");
var jsonContent = JSON.parse(contents)



class BadBot{
   constructor(){
      this.command = []
      this.client = new tmi.Client({
         options: { debug: true },
         connection: {
            reconnect: true,
            secure: true
         },
         identity: {
            username: 'itsatoasterucsc',
            password: 'oauth:s9dlg4e1d7b2755k3ly8n0ciycjg1v'
         },
         channels: ['itsatoasterucsc']
      });

      this.client.connect();

      const intervalObj = setInterval(() => {
        const values = Object.values(jsonContent)
        const randomValue = values[parseInt(Math.random() * values.length)]
        const key = Object.keys(jsonContent).find(key => jsonContent[key] === randomValue);
        this.client.say('itsatoasterucsc', key)
      }, 1000);
      


   }


}

module.exports.tb = BadBot;