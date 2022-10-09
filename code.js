const passInput = document.getElementById('password')
const passConf = document.getElementById('conf-password')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const email = document.getElementById('email')
const passMsg = document.getElementById('confmessage')

// Check password inputs to confirm matching values.
const pCheck = () => {
    if (passInput.value === passConf.value) {
        passMsg.style.color = "green"
        passMsg.innerHTML = "Passwords Match!"
    } else {
        passMsg.style.color = "red"
        passMsg.innerHTML = "Passwords need to match."
    }
}




// function passValid() {
//     if (passConf === passInput) {
//         passConf.setCustomValidity('');
//     } else {
//         passConf.setCustomValidity('Passwords do not match');
//     }
// }

// passInput.addEventListener('onChange', () => {
//     passValid();
// })

// passConf.addEventListener('onChange', () => {
//     passValid();
// })

// passInput.addEventListener("invalid", () => {
//     if (passInput.value === "") {
//         passInput.setCustomValidity("Enter your password")
//     }
// });

// passConf.addEventListener("invalid", () => {
//     if (passConf.value === "") {
//         passConf.setCustomValidity("Enter your password again to confirm.")
//     }
// });