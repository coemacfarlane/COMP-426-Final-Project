import renderCard from "./color_card/color_card.js";

const paletteList = document.querySelector("#root");
const setupPalettes = (data) => {
  if (data.length) {
    let html = "";
    for (let i = 0; (i < 50) && (i < data.length); i++) {
      const palette = data[i].data();
      if(paletteList != null){
      if(paletteList.classList.contains("profile")){
        if (palette.creator == firebase.auth().currentUser.email) {
          const card = renderCard(
            palette.name,
            palette.creator,
            palette.color1,
            palette.color2,
            palette.color3,
            palette.color4,
            palette.color5
        );
        html += card;
      }
      } else {
        const card = renderCard(
          palette.name,
          palette.creator,
          palette.color1,
          palette.color2,
          palette.color3,
          palette.color4,
          palette.color5
      );
      html += card;
      }
    }
    };
    paletteList.innerHTML = html;
  } else {
    paletteList.innerHTML = `<p>Login to view palettes</p>`;
  }
};

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user currently signed in");
    db.collection("palettes")
      .get()
      .then((snapshot) => {
        setupPalettes(snapshot.docs);
      });
  } else {
    console.log("user currently signed out");
    setupPalettes([]);
  }
});

const createButton = $("#save-palette-btn");
createButton.on("click", function () {
  event.preventDefault();
  const color1 = $("#color-1").css("background-color");
  const color2 = $("#color-2").css("background-color");
  const color3 = $("#color-3").css("background-color");
  const color4 = $("#color-4").css("background-color");
  const color5 = $("#color-5").css("background-color");

  // function componentToHex(c) {
  //   const num = parseInt(c);
  //   const hex = num.toString(16);
  //   return hex.length == 1 ? "0" + hex : hex;
  // }

  // function rgbToHex(r, g, b) {
  //   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  // }

  // function getRGB(str) {
  //   var match = str.match(
  //     /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  //   );
  //   return match
  //     ? {
  //         red: match[1],
  //         green: match[2],
  //         blue: match[3],
  //       }
  //     : {};
  // }

  const paletteName = document.getElementById("palette-name-field").value;
  db.collection("palettes").add({
    name: paletteName,
    creator: firebase.auth().currentUser.email,
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5,
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
      console.log("user signed in", user);
      window.location.href = "./profile.html";
    });
  });
}

const logout = $("#logout-btn");
logout.on("click", function () {
  auth.signOut().then(() => {
    console.log("User signed out");
  });
});

if (document.getElementById("signup-btn-2") != null) {
  const signup = document.getElementById("signup-btn-2");
  signup.addEventListener("click", (e) => {
    e.preventDefault();

    // Get user info
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log("user account created", user);
      window.location.href = "./profile.html";
    });
  });
}