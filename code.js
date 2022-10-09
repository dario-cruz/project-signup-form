const passInput = document.getElementById('password')
const passConf = document.getElementById('conf-password')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const email = document.getElementById('email')
const passMsg = document.getElementById('confmessage')
const formButton = document.getElementById('formbtn')

// Check password inputs to confirm matching values.
const pCheck = () => {
    if (passInput.value === passConf.value) {
        passMsg.style.color = "green"
        passMsg.innerHTML = "Passwords Match!"
        formButton.setAttribute('form', 'mainform')
    } else {
        passMsg.style.color = "red"
        passMsg.innerHTML = "Passwords need to match."
        formButton.setAttribute('form', '')
    }
}


