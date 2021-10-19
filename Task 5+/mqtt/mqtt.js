//Code for our MQTT connections and brokers!
const mqtt = require('mqtt');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Individual_Project', {useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

client.on('connect', () => { 
    client.subscribe('/deviceid');
  console.log('mqtt connected');
});

client.on('message', (topic, message) => {
    if (topic == '/userid') {
      const data = JSON.parse(message);
      console.log(data);
    }
  });

//function to take data into DB using mqtt
/*
client.on('message', (topic, message) => 
    {
        if (topic == '/userid') 
        {
            const data = JSON.parse(message);
            Device.findOne({"name": data.deviceId }, (err, device) => {
            if (err) 
            {
                console.log(err)
            }
            const {id, name, category, description, buy}= data;
            device.save(err => 
                {
                    if (err) {
                    console.log(err)
                }
            });
        });
    }
});
*/

//post function that executes user preferences
app.post('/mqtt/userpreferences', (req, res) => {
    const {userID, song}  = req.body;
    const topic = `/userid/${userID}`;
    client.publish(topic,"Lights turned on & Coffee machine on. Music playing [Song Title]: " + song, () => {
      res.send('Lights turned on & Music Playing!');
    });
  });

//post function to send manual commands 
app.post('/mqtt/sendcommand', (req, res) => {
    const { deviceID, command }  = req.body;
    const topic = `/deviceid/${deviceID}`;
    client.publish(topic, command, () => {
      res.send('published new message');
    });
  });
    
app.listen(port, () => { 
    console.log(`listening on port ${port}`);
});


