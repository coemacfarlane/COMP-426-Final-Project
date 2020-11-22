import renderCard from './color_card/color_card.js'

const paletteList = document.querySelector(".palette-container");

const setupPalettes = (data) => {

  let html = ''
  data.forEach(doc => {
    const palette = doc.data();
    console.log(palette);
  });
}

renderCard();

// Get data
db.collection("palettes").get().then(snapshot => {
  setupPalettes(snapshot.docs);
}) 


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

const logout = $("#logout-btn")
// document.getElementById("logout-btn");
logout.on("click", function() {
  auth.signOut().then(() => {
            console.log("User signed out")
        })
})

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

