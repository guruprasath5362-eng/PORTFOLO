function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if(name=="" || email=="" || phone=="" || message==""){
        error.style.display="block";
        error.innerHTML="One or more fields have an error. Please check and try again.";
        return false;
    }

    alert("Message Submitted Successfully!");
    closePopup();
    return false;
}