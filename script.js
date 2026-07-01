function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("error").innerText = "Please fill all fields";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}