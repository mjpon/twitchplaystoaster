const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://10.0.0.131')

/**
* The state of the garage, defaults to closed
* Possible states : closed, opening, open, closing
*/

var state = 'closed'

client.on('connect', () => {
  // Inform controllers that garage is connected
  console.log("hammond ites")
  client.publish('garage/connected', 'true')
})



// var mqtt = require('mqtt')

// class MTTQ{
//    constructor(address){
//       this.client  = mqtt.connect("2601:647:cb00:f20::2dd3")
//       this.client.on('connect', function () {
//          console.log("hammond ites")
//          this.client.subscribe('presence', function (err) {
//             if (!err) {
//                this.client.publish('presence', address)
//             }
//          })
//       })
      
//       this.client.on('message', function (topic, message) {
//          // message is Buffer
//          console.log(message.toString())
//          this.client.end()
//       })
//    }

//    //SEND a message
//    publish(address,info){
//       this.client.publish(address,info)
//    }
// }

