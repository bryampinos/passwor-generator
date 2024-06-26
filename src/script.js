var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
jqueryScript.async = false;
document.head.appendChild(jqueryScript);


var popperScript = document.createElement('script');
popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
popperScript.async = false;
document.head.appendChild(popperScript);


var bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
bootstrapScript.async = false;
document.head.appendChild(bootstrapScript);



document.getElementById('generateBtn').addEventListener('click', function() {
    var length = document.getElementById('passwordLength').value;
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;
    var password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('generatedPassword').value = password;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    var passwordField = document.getElementById('generatedPassword');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); /* Para móviles */
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles: ' + passwordField.value);
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()";
    var charset = "";
    
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;
    
    if (charset === "") return "Por favor selecciona al menos un tipo de caracter";

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
