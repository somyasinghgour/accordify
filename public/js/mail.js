var config = {
    apiKey: "AIzaSyDlSJIV55BTRfrz7zzptNleGw8MAWwEKw4",
    authDomain: "accordifysolutions-ac8d4.firebaseapp.com",
    databaseURL: "https://accordifysolutions-ac8d4.firebaseio.com/",
    projectId: "accordifysolutions-ac8d4",
    storageBucket: "accordifysolutions-ac8d4.appspot.com",
    messagingSenderId: "383058873066",
    appId: "1:383058873066:web:7dc1192dc09a3078"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, subject, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, subject, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email: email,
        phone: phone,
        message: message
    });
}