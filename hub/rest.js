const express = require('express')
const TwitchBot = require('./twitch-bot');//import our class
var bot1 = new TwitchBot.tb();//generates a new instance of our class

class Server{
   constructor(){
      this.app = express()

      this.app.get('/', function (req, res) {
         
         res.json({"commands":bot1.returnCommands()})
       })
        
      this.app.listen(3000,function(){
         console.log("connected and open on port " + 3000)
      })
   }


}

var server = new Server()

module.exports.rest = Server;