emaildocument.getElementById()

// Create an account
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


// Sign into your account
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
});