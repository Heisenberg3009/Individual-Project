//This is the Database API

//Database Connection Established--
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Individual_Project', {useNewUrlParser: true, useUnifiedTopology: true });
//Get collection schema-- 
const Devices = require('./models/devicemodel');
const Users = require('./models/usermodel')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = 5000;

//Test API!
app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

//API Documentation:
/**
* @api {get} /api/devices AllDevices An array of all devices
* @apiGroup Device
* @apiSuccessExample {json} Success-Response:
*  [
*    {
*      
      "id": 1,
      "devicename": "Light 1",
      "devicetype": "Lighting",
      "devicenumber": 10001
*    }
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "Device does not exist"
*  }
*/

//API to display devices!
app.get('/api/devices', (req, res) => {
    Devices.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });

app.get('/api/users', (req, res) => {
    Users.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });

//API to save new devices!  
app.post('/api/devices', (req, res) => {
    const {devicename, devicetype, devicenumber} = req.body;
    const newVehicle = new Vehicle({
        devicename,
        devicetype,
        devicenumber
    });
    newDevices.save(err => {    
      return err
        ? res.send(err)
        : res.send('successfully added Device Data! Hurray!');
    });
  });

//Documentation module
app.use(express.static(`${__dirname}/public/generated-docs`));

app.get('/docs', (req, res) => {
    res.sendFile(`${__dirname}/public/generated-docs/index.html`);
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});