const data = { };

function SendValues(e)
{
    data[e.name] = e.value;
}

function SendEmail(){    
      emailjs.send('service_5qxc8g9', 'template_8pnt5pf', data)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
});
}
