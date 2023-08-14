function submitForm(event) {
  // Validate the form data.
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please enter your name and email address.");
    event.preventDefault();
    return;
  }

  // Submit the form.
  document.getElementById("myForm").submit();
}

// Bind the onsubmit event to the form.
document.getElementById("myForm").addEventListener("submit", submitForm);
