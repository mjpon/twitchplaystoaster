const tmi = require('tmi.js');

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
         channels: [ 'cruzhacks' ]
      });

      this.client.connect();

      this.client.on('message', (channel, tags, message, self) => {
         if(self) return;
         if(message.toLowerCase() === '!hello') {
            this.client.say(channel, `@${tags.username}, heya!`);
         }
      });
   }
   

}

module.exports.tb = TwitchBot;