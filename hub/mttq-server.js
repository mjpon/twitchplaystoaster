var mqtt = require('mqtt')

class MTTQ{
   constructor(ip){
      this.client  = mqtt.connect(ip)
      this.client.on('connect', function () {
         this.client.subscribe('presence', function (err) {
            if (!err) {
               this.client.publish('presence', 'Hello mqtt')
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

