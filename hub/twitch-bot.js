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
      this.commands = [];
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

      this.client.on('message', (channel, tags, message, self) => {
         try{
            if(jsonContent[message.toLowerCase()]){
               this.client.say(channel,jsonContent[message.toLowerCase()])
               this.commands.push(jsonContent[message.toLowerCase()])
            }
         }catch(e){
            this.client.say(channel, `twitch bot error`);
         }

         if(message.toLowerCase() === '!hello') {
            this.client.say(channel, `@${tags.username}, heya!`);
            console.log("hammond you moron")
         }
      });
   }

   returnCommands(){
      var temp = this.commands
      this.commands = []
      return temp
   }


}

module.exports.tb = TwitchBot;