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

