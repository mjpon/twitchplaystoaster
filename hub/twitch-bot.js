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
      this.commands2 = [];
      this.donate = 0;
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
         channels: ["itsatoasterucsc"]
      });

      this.client.connect();

      this.client.on('message', (channel, tags, message, self) => {
         try{
            if(jsonContent[message.toLowerCase()]){
               this.client.say(channel,jsonContent[message.toLowerCase()])
               this.commands.push(jsonContent[message.toLowerCase()])
               this.commands2.push(jsonContent[message.toLowerCase()])
            }
            // this.commands.push(message.toLowerCase());
         }catch(e){
            this.client.say(channel, `twitch bot error`);
         }

         if(message.toLowerCase() === '!donatetab') {
            this.client.say(channel, `@${tags.username} donated by opening a tab on some random computer!`);
            console.log("hammond you idiot, some random bloke will wonder why their computer opened a random tab!")
            this.donate++;
            
         }
         if(message.toLowerCase() === '!hello') {
            this.client.say(channel, `@${tags.username}, hello there!`);
            console.log("hammond you moron, don't just say hi to the crowd!")
         }
      });
   }

   returnCommands(){
      var temp = this.commands
      this.commands = []
      return temp
   }

   returnCommands2(){
      var temp = this.commands2
      this.commands2 = []
      return temp
   }

   returnDonate(){
      var temp = this.donate
      this.donate = 0
      return temp
   }


}

module.exports.tb = TwitchBot;


    // "!bforward":"The Roastmaster says: 'Going Forward, Eat My Crumbs!'",
    // "!bleft":"The Roastmaster says: 'Turning Left, Get Roasted!'",
    // "!bright":"The Roastmaster says: 'Turning Right, Get Rekt Scrubs!'"
    //add to json later when we have a second toaster kart