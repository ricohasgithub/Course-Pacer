
document.getElementById("signup-button").onclick = function(e) {

    // Retrieve the email and password information off the index.html page
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    e.preventDefault();
    e.stopPropagation();

    console.log("Clicked");

    firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
  
};

document.getElementById("login-button").onclick = function(e) {

    // Retrieve the email and password information off the index.html page
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    e.preventDefault();
    e.stopPropagation();

    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })

};

// Firebase listener for html page redirection
firebase.auth().onAuthStateChanged(function(user) {
    if (user !== null) {
      window.location = "course.html";
    }
});