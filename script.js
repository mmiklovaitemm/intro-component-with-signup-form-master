// Function to show error message/icon
function showError(inputId, errorMessage, errorIconId) {
    document.getElementById(inputId + '-error').textContent = errorMessage;
    document.getElementById(inputId + '-error').style.display = "block";
    document.getElementById(errorIconId).style.display = "block";
    document.getElementById(inputId).classList.add('input-error');
}

// Function to hide error message/icon
function hideError(inputId, errorIconId) {
    document.getElementById(inputId + '-error').style.display = "none";
    document.getElementById(errorIconId).style.display = "none";
    document.getElementById(inputId).classList.remove('input-error');
}

// Function to check field
function validateField(value, inputId, errorIconId, errorMessage, additionalCheck = () => true) {
    if (value === "") {
        showError(inputId, errorMessage, errorIconId);
        return false;
    } else {
        hideError(inputId, errorIconId);
        return true;
    }
}

document.getElementById("claim-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let formIsValid = true;

    // Check every field
    formIsValid &= validateField(firstName, "first-name", "first-name-error-icon", "First name cannot be empty.");
    formIsValid &= validateField(lastName, "last-name", "last-name-error-icon", "Last name cannot be empty.");
    formIsValid &= validateField(email, "email", "email-error-icon", "Email cannot be empty.");
    formIsValid &= validateField(password, "password", "password-error-icon", "Password cannot be empty.");

    // If form is valid, submit the form
    if (formIsValid) {
        document.getElementById("claim-form").submit();
    }
})

