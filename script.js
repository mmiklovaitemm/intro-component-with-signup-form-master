// Function to show error message/icon
function showError(inputId, errorMessage, errorIconId) {
    const errorElement = document.getElementById(inputId + '-error');
    const errorIconElement = document.getElementById(errorIconId);
    const inputElement = document.getElementById(inputId);

    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    }
    if (errorIconElement) {
        errorIconElement.style.display = 'block';
    }
    if (inputElement) {
        inputElement.classList.add('input-error');
    }
}

// Function to hide error message/icon
function hideError(inputId, errorIconId) {
    const errorElement = document.getElementById(inputId + '-error');
    const errorIconElement = document.getElementById(errorIconId);
    const inputElement = document.getElementById(inputId);

    if (errorElement) {
        errorElement.style.display = 'none';
    }
    if (errorIconElement) {
        errorIconElement.style.display = 'none';
    }
    if (inputElement) {
        inputElement.classList.remove('input-error');
    }
}

// Function to validate a field
function validateField(value, inputId, errorIconId, errorMessage) {
    if (value.trim() === '') {
        showError(inputId, errorMessage, errorIconId);
        return false;
    } else {
        hideError(inputId, errorIconId);
        return true;
    }
}

// Function to check email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
    return emailPattern.test(email);
}

// Event listener for form submission
document.getElementById('claim-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const fields = [
        { id: 'first-name', errorIcon: 'first-name-error-icon', errorMessage: 'First Name cannot be empty' },
        { id: 'last-name', errorIcon: 'last-name-error-icon', errorMessage: 'Last Name cannot be empty' },
        { id: 'email', errorIcon: 'email-error-icon', errorMessage: 'Email cannot be empty' },
        { id: 'password', errorIcon: 'password-error-icon', errorMessage: 'Password cannot be empty' },
    ];

    let isValid = true; // To track overall validity
    const email = document.getElementById('email').value.trim();

    // Validate each field
    fields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        if (field.id === 'email') {
            if (!validateField(value, field.id, field.errorIcon, field.errorMessage) || !validateEmail(value)) {
                showError(field.id, 'Looks like this is not an email', field.errorIcon);
                isValid = false;
            }
        } else {
            if (!validateField(value, field.id, field.errorIcon, field.errorMessage)) {
                isValid = false;
            }
        }
    });

    // If all fields are valid, you can submit the form or perform any action you need
    if (isValid) {
        console.log('Form submitted successfully!'); // Placeholder for actual form submission
        // Uncomment the following line to actually submit the form
        // document.getElementById('your-form-id').submit();
    }
});