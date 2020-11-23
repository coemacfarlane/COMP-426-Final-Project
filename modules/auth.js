import renderCard from "./color_card/color_card.js";

const paletteList = document.querySelector("#root");
const setupPalettes = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const palette = doc.data();
      // by taking this if-statement out, all the palettes in the database show up
      //if (palette.creator == firebase.auth().currentUser.email) {
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
     // }
    });
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
  const color1 = getRGB($("#color-1").css("background-color"));
  const color2 = getRGB($("#color-2").css("background-color"));
  const color3 = getRGB($("#color-3").css("background-color"));
  const color4 = getRGB($("#color-4").css("background-color"));
  const color5 = getRGB($("#color-5").css("background-color"));

  function componentToHex(c) {
    const num = parseInt(c);
    const hex = num.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function getRGB(str) {
    var match = str.match(
      /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    );
    return match
      ? {
          red: match[1],
          green: match[2],
          blue: match[3],
        }
      : {};
  }

  const paletteName = document.getElementById("palette-name-field").value;
  db.collection("palettes").add({
    name: paletteName,
    creator: firebase.auth().currentUser.email,
    color1: rgbToHex(color1.red, color1.blue, color1.green),
    color2: rgbToHex(color2.red, color2.blue, color2.green),
    color3: rgbToHex(color3.red, color3.blue, color3.green),
    color4: rgbToHex(color4.red, color4.blue, color4.green),
    color5: rgbToHex(color5.red, color5.blue, color5.green),
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
    });
  });
}
