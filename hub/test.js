// var mqtt = require('mqtt')
// var client  = mqtt.connect("mqtt:10.0.0.131");
 
// client.on('connect', function () {
//   client.subscribe('test', function (err) {
//     if (!err) {
//       client.publish('test', 'Hello mqtt')
//     }
//   })
// })
 
// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })