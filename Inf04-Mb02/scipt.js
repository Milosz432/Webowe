document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('nameInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var messageTextarea = document.getElementById('messageTextarea').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    var isValid = true;

    if (nameInput === '') {
        nameError.textContent = 'Pole Imię nie może być puste.';
        isValid = false;
    }

    if (emailInput === '') {
        emailError.textContent = 'Pole E-mail nie może być puste.';
        isValid = false;
    }

    if (messageTextarea === '') {
        messageError.textContent = 'Pole Wiadomość nie może być puste.';
        isValid = false;
    }

    if (isValid === true) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    }
});