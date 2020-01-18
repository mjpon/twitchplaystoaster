const tmi = require('tmi.js');

// Define JSON File
var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("commands.json");
// Define to JSON type
console.log("\n *Fetched commands* \n");
var jsonContent = JSON.parse(contents)



class TwitchBot{
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
         channels: [ 'cruzhacks',  'NikEh30', 'fl0m']
      });

      this.client.connect();

      this.client.on('message', (channel, tags, message, self) => {
         if(self) return;
         if(message.toLowerCase() === 'hello') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }
         if(message.toLowerCase() === 'no') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }
         if(message.toLowerCase() === 'is') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }
         if(message.toLowerCase() === 'you') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }

         // if(message.toLowerCase().indexOf("f") > -1 ) {
         //    this.client.say(channel, `@${tags.username}, heya!`);
         //    console.log("hammond you moron")
         // }
         // jsonContent
         console.log(jsonContent.commands[1].name);
         if(message.toLowerCase() ===  jsonContent.commands[1].name) {
            this.client.say(channel, `@${tags.username}, toast!`);
            console.log("hammond you moron")
         }
         if(message.toLowerCase() === 'he') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }

         if(message.toLowerCase() === 'f10mB') {
            this.client.say(channel, `@${tags.username}, YAHHOO!`);
            console.log("hammond you bloithering idiot")
         }

         if(message.toLowerCase() === 'fl0mHeart') {
            this.client.say(channel, `@${tags.username}, YAHHOO!`);
            console.log("hammond you bafoon")
         }

      });
   }
   

}

module.exports.tb = TwitchBot;