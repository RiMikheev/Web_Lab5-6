function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,5}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
        alert('Адрес электронной почты введен неправильно!');
    }
}