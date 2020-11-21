if (document.getElementById("login-btn") != null) {
  const login = document.getElementById("login-btn");
  login.addEventListener('click', (e) => {
    e.preventDefault();

    // Get user info
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Sign up the user
    auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user);
    })
  })
}

// const logout = $('head').getElementById("logout-btn");
// console.log(logout);
// logout.addEventListener('click', (e) => {
//     e.preventDefault();

//     auth.signOut().then(() => {
//         console.log("User signed out")
//     })
// })

if (document.getElementById("signup-btn-2") != null) {
  const signup = document.getElementById("signup-btn-2");
  signup.addEventListener('click', (e) => {
    e.preventDefault();

    // Get user info
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user);
    })
  })
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user signed in", user);
  } else {
    console.log("user signed out")
  }
})

