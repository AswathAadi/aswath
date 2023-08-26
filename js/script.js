function SendEmail(){
    var templateParams = {
        from_name : document.getElementById("from_name").value,
        from_email : document.getElementById("from_email").value,
        from_mobile : document.getElementById("from_mobile").value,
        from_mobile : document.getElementById("from_mobile").value,
        from_message : document.getElementById("from_message_data").value
      };
    
      emailjs.send('service_5qxc8g9', 'template_8pnt5pf', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
});
}


document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();
    
    // Perform your form processing here
    // You can use AJAX to send the form data to the server
    
    // Optionally, you can also update the page content without a full reload
    
    // Example: Display a success message
    var successMessage = document.createElement("p");
    successMessage.textContent = "Form submitted successfully!";
    document.body.appendChild(successMessage);
});
