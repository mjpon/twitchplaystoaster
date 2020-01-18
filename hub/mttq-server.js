var mqtt = require('mqtt')

class MTTQ{
   constructor(address){
      this.client  = mqtt.connect(address)
      this.client.on('connect', function () {
         this.client.subscribe('presence', function (err) {
            if (!err) {
               this.client.publish('presence', address)
            }
         })
      })
      
      this.client.on('message', function (topic, message) {
         // message is Buffer
         console.log(message.toString())
         this.client.end()
      })
   }

   //SEND a message
   publish(address,info){
      this.client.publish(address,info)
   }
}

