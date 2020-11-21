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

const logout = document.getElementById("logout-btn")
logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log("User signed out")
    })
})