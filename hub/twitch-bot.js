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
         var i;
         for(i = 0; i< jsonContent.length; i++){
            if( jsonContent.commands[i].name === message.toLowerCase()){
               this.client.say(channel, jsonContent.commands[i].result);
               console.log("hcomarde");
            }else if( message.toLowerCase().contains(jsonContent.commands[i].name)){
               this.client.say(channel, jsonContent.commands[i].result);
               console.log("hcomarde");
            }
         }

         if(message.toLowerCase() === 'hello') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }
         

         // if(message.toLowerCase().indexOf("f") > -1 ) {
         //    this.client.say(channel, `@${tags.username}, heya!`);
         //    console.log("hammond you moron")
         // }
         // jsonContent
 

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