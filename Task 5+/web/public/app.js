const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/mqtt';

$('#navbar').load('navbar.html');

$.get(`${API_URL}/devices`)
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.id}</td>
        <td>${device.devicename}</td>
        <td>${device.devicetype}</td>
        <td>${device.devicenumber}</td>
      </tr>`
    );
  });
})

$('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = 'device-list.html';
  });

  $.get(`${API_URL}/users`)
  .then(response=> {
    response.forEach(user=> {
      if(user.id>0)
      {
        const song = user.song;
        const userID = user.id;
        $.post(`${MQTT_URL}/userpreferences`, { userID, song })
         .then(response => {
         location.href = '/deviceslist';
        })
      }
    }
  )
})
.catch(error=>
  {
    console.error(`Error: ${error}`);
  })