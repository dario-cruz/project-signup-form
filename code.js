const passInput = document.getElementById('password')
const passConf = document.getElementById('confpass')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const email = document.getElementById('email')

function passValid() {
    if (passConf === passInput) {
        passConf.setCustomValidity('');
    } else {
        passConf.setCustomValidity('Passwords do not match');
    }
}

passInput.addEventListener('onChange', () => {
    passValid();
})

passConf.addEventListener('onChange', () => {
    passValid();
})