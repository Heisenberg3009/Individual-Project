const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile(`${base}/welcome.html`);
  });

  app.get('/registerdevice', (req, res) => {
    res.sendFile(`${base}/register-device.html`);
  });

  app.get('/deviceslist', (req, res) => {
    res.sendFile(`${base}/device-list.html`);
  });

  app.get('/userslist', (req, res) => {
    res.sendFile(`${base}/userlist.html`);
  });

  app.get('/removedevice', (req, res) => {
    res.sendFile(`${base}/removedevice.html`);
  });

  app.get('/aircondition', (req, res) => {
    res.sendFile(`${base}/aircondition.html`);
  });

  app.get('/lighting', (req, res) => {
    res.sendFile(`${base}/lighting.html`);
  });

  app.get('/security', (req, res) => {
    res.sendFile(`${base}/security.html`);
  });
  
  app.get('/*', (req, res) => {
    res.sendFile(`${base}/404.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });