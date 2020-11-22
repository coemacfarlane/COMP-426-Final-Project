import { event } from "jquery";
import renderCard from "./color_card/color_card.js";

const paletteList = document.querySelector("#root");
const setupPalettes = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const palette = doc.data();
      const card = renderCard(
        palette.color1,
        palette.color2,
        palette.color3,
        palette.color4,
        palette.color5
      );
      html += card;
    });
    paletteList.innerHTML = html;
  } else {
    console.log("test");
    paletteList.innerHTML = `<p>Login to view palettes</p>`;
  }
};

auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("palettes")
      .get()
      .then((snapshot) => {
        setupPalettes(snapshot.docs);
      });
  } else {
    setupPalettes([]);
  }
});

const createButton = $("#save-palette-btn");
// document.getElementById("logout-btn");
createButton.on("click", function () {
  event.preventDefault();
  db.collection('palettes').add({
    color1: $("color-1").value,
    color2: $("color-2").value,
    color3: $("color-3").value,
    color4: $("color-4").value,
    color5: $("color-5").value
  });
});

if (document.getElementById("login-btn") != null) {
  const login = document.getElementById("login-btn");
  login.addEventListener("click", (e) => {
    e.preventDefault();

    // Get user info
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign up the user
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      console.log(user);
    });
  });
}

const logout = $("#logout-btn");
// document.getElementById("logout-btn");
logout.on("click", function () {
  auth.signOut().then(() => {
    console.log("User signed out");
  });
});

// console.log(logout);
// logout.addEventListener('click', (e) => {
//     e.preventDefault();

//     auth.signOut().then(() => {
//         console.log("User signed out")
//     })
// })

if (document.getElementById("signup-btn-2") != null) {
  const signup = document.getElementById("signup-btn-2");
  signup.addEventListener("click", (e) => {
    e.preventDefault();

    // Get user info
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log(user);
    });
  });
}
