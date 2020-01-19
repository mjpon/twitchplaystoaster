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
         channels: ['cruzhacks']
      });

      this.client.connect();

      const intervalObj = setInterval(() => {
        const values = Object.values(jsonContent)
        const randomValue = values[parseInt(Math.random() * values.length)]
        this.client.say('cruzhacks', randomValue)
      }, 8000);
      

    //   this.client.on('message', (channel, tags, message, self) => {

            

    //     if(message.toLowerCase() === '!hello') {
    //         this.client.say(channel, `@${tags.username}, heya from anarchy!`);
    //         console.log("hammond you moron")
    //      }
    //   });


   }


}

module.exports.tb = BadBot;