const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
form.addEventListener('submit', e => {
    e.preventDefault();
    validationInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    if (!errorDisplay) {
        errorDisplay = document.createElement('div');
        errorDisplay.className = 'error';
        inputControl.appendChild(errorDisplay);
    }

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    if (errorDisplay) {
        errorDisplay.innerText = '';
    }

    inputControl.classList.remove('error');
    inputControl.classList.add('success');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


const validationInput = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    let isFormValid = true;

    if (fullNameValue === '') {
        setError(fullName, 'Full name is required');
        isFormValid = false;
    } else {
        setSuccess(fullName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required');
        isFormValid = false;
    } else if (phoneNumberValue.length < 10) {
        setError(phoneNumber, 'Phone number must be at least 10 characters');
        isFormValid = false;
    } else {
        setSuccess(phoneNumber);
    }

    if (isFormValid) {
        alert('Your application has been submitted successfully!');
    }
};

    function submitform(){
    alert("Your application has been submitted successfully!");
    return true;// to prevent page refresh

   
}


function showDonations() {
    setPresetAmounts();
    document.getElementById('donate').style.display = 'block';
}

function closeDonations() {
    document.getElementById('donate').style.display = 'none';
}

function setPresetAmounts() {
    const amounts = [10, 30, 50, 70, 100];
    for (let i = 1; i <= 5; i++) {
        const button = document.getElementById('amount' + i);
        button.textContent = 'R' + amounts[i - 1];
        button.onclick = () => donateAmount(amounts[i - 1]);
    }
}

function donateAmount(amount) {
    alert('R' + amount + ' donated. Thank you!');
    closeDonations();
}

function donateCustom() {
    const customAmount = Number(document.getElementById('custom-amount').value);
    if (customAmount > 0) {
        alert('R' + customAmount + ' donated. Thank you!');
        closeDonations();
    } else {
        alert('Please enter a valid amount.');
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('donate');
    if (event.target == modal) {
        closeDonations();
    }
}

