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
  const deviceid = $('#deviceid').val();
  const devicename = $('#devicename').val();
  const devicetype = $('#devicetype').val();
  const devicenumber = $('#devicenumber').val();
  const body2 = {
    deviceid,
    devicename,
    devicetype,
    devicenumber,
  };
$.post(`${API_URL}/devices`, body2)
.then(response => {
  location.href = '/deviceslist';
})
.catch(error => {
  console.error(`Error: ${error}`);
  });
});

$('#delete').on('click', function(){
  // let id = $(this).attr("data-id");
  const id =  $('#delete_id').val();
  const body={id};
   $.post(`${API_URL}/delete`,body) 
   .then(response => {
    location.reload(); 
   })
})

 $.get(`${API_URL}/users`)
  .then(response=> {
    response.forEach(user=> {
      $('#users tbody').append(`
    <tr>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.city}</td>
    <td>${user.phone}</td>
    <td>${user.occupation}</td>
    <td>${user.email}</td>
    <td>${user.id}</td>
    </tr>`
    )
      {
        const song = user.song;
        const userID = user.id;
        $.post(`${MQTT_URL}/userpreferences`, { userID, song })
         .then(response => {
        })
      }
    }
  )
})
