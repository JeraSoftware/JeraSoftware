function sendMail(event) {
    event.preventDefault();  
    emailjs.send("service_y41bmfi", "template_aplxii5", {
        subject: document.getElementById("subject").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        email: document.getElementById("email").value,
    }).then(function(response) {
        alert("Message sent successfully!"); 

       
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }).catch(function(error) {
        alert("Failed to send message. Please try again."); // Error alert
    });
}
