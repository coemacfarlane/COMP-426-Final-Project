var colorPicker;

// ------ COLOR ALGORITHMS --------
function defaultRandomizer() {
  let colors = [];

  for (var i = 0; i < 5; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
  }
  return colors;
}

// similar saturation and value, hues spaced out by approx. equal differences
function analogous() {
  // for analogous, S and V stay the same
  // H changes by 8!!
  // let baseColor = colorPicker.color[0];
  // let h = baseColor.$.h;
  // let s = baseColor.$.s;
  // let v = baseColor.$.v;
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let v = Math.floor(Math.random() * 100);
  let baseColor = "hsl(" + h + ", " + s + ", " + v + ")";
  let colors = [];
  colors[0] = baseColor;
  // gets two hues lighter
  for (var i = 1; i < 3; i++) {
    let hCol = h - i * 12;
    // check that hCol is between 0 and 360
    if (hCol < 0) {
      hCol = 360 + hCol;
    } else if (hCol > 360) {
      hCol = hCol - 360;
    }
    colors[i] = "hsl(" + hCol + "," + s + "," + v + ")";
  }
  // gets two hues darker
  for (var i = 1; i < 3; i++) {
    let hCol = h + i * 12;
    // check that hCol is between 0 and 360
    if (hCol < 0) {
      hCol = 360 + hCol;
    } else if (hCol > 360) {
      hCol = hCol - 360;
    }
    colors[i + 2] = "hsl(" + hCol + "," + s + "," + v + ")";
  }
  return colors;
}

// same hue, 2 with same saturation diff values, 3 with same sat. diff values
// ex: HSV format (282, 74, 38) (282, 44, 90) (282, 74, 88) (282, 44, 38) (282, 74, 68)
function monochromatic() {
  // let baseColor = colorPicker.color[0];
  // let h = baseColor.$.h;
  // let s = baseColor.$.s;
  // let v = baseColor.$.v;
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let v = Math.floor(Math.random() * 100);
  if (v < 30) {
    v = 30;
  }
  let baseColor = "hsl(" + h + ", " + s + ", " + v + ")";

  let colors = [];
  colors[0] = baseColor;
  // need checks to make sure s and v don't become negative or greater than 100
  let v13 = v - 50;
  let s23 = s - 30;
  let v2 = v + 2;
  let v4 = v - 20;

  if (v13 < 30) {
    v13 = 30;
  }
  if (s23 < 0) {
    s23 = 5;
  }
  if (v2 > 100) {
    v2 = 100;
  }
  if (v4 < 0) {
    v4 = 5;
  }
  colors[1] = "hsl(" + h + "," + s + "," + v13 + ")";
  colors[2] = "hsl(" + h + "," + s23 + "," + v2 + ")";
  colors[3] = "hsl(" + h + "," + s23 + "," + v13 + ")";
  colors[4] = "hsl(" + h + "," + s + "," + v4 + ")";
  return colors;
}

// opposite hues, 3 of one hue, 2 of other hue, similar sat. and value
// ex: HSV format (181, 80, 58) (181, 60, 100) (181, 70, 88) (23, 90, 58) (23, 70, 88)
function complementary() {
  // console.log('complementary');
  // let baseColor = colorPicker.color[0];
  // let h = baseColor.$.h;
  // let s = baseColor.$.s;
  // let v = baseColor.$.v;
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let v = Math.floor(Math.random() * 100);
  if (s < 30) {
    s = 30;
  }
  if (v < 50) {
    v = 50;
  }
  let baseColor = "hsl(" + h + ", " + s + ", " + v + ")";

  let colors = [];
  colors[0] = baseColor;
  // need checks to make sure s and v don't become negative or greater than 100
  // need to make sure that h is between 0 and 360. also convert negative numbers to 360-
  let h34 = h - 180;
  if (h34 < 0) {
    h34 = 360 + h34;
  }
  colors[1] = "hsl(" + h + "," + (s + 10) + "," + (v - 30) + ")";
  colors[2] = "hsl(" + h + "," + (s - 10) + ",80)";
  colors[3] = "hsl(" + h34 + "," + (s + 20) + "," + (v - 30) + ")";
  colors[4] = "hsl(" + h34 + "," + s + "," + v + ")";
  return colors;
}

// one of one hue, two hues splitting difference around opposite hue
// ex: HSV format (181, 70, 88) / (39, 80, 58) (39, 75, 88) / (5, 60, 58) (5, 65, 88)
function splitComplementary() {
  console.log("split");
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let v = Math.floor(Math.random() * 100);
  if (s < 30) {
    s = 30;
  }
  if (v < 50) {
    v = 50;
  }
  if (v > 85) {
    v = 85;
  }
  let baseColor = "hsl(" + h + ", " + s + ", " + v + ")";
  let colors = [];
  colors[0] = baseColor;
  let h12 = h + 163;
  if (h12 > 360) {
    h12 = h12 - 360;
  }
  let h34 = h12 + 34;
  if (h34 > 360) {
    h34 = h34 - 360;
  }

  colors[1] = "hsl(" + h12 + "," + (s - 10) + "," + (v - 30) + ")";
  colors[2] = "hsl(" + h12 + "," + (s - 5) + "," + v + ")";
  colors[3] = "hsl(" + h34 + "," + (s + 10) + "," + (v - 30) + ")";
  colors[4] = "hsl(" + h34 + "," + (s + 5) + "," + v + ")";
  return colors;
}

// generate a new palette, ran on clicking the generate button
function generateNewPalette() {
  let radios = document.getElementsByClassName("form-check-input");
  let checkedEl = "";
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checkedEl = radios[i].id;
    }
  }
  // brute forced to save time on complexity ¯\_(ツ)_/¯
  if (checkedEl == "random-btn") {
    colorPicker.setColors(defaultRandomizer());
  } else if (checkedEl == "analog-btn") {
    colorPicker.setColors(analogous());
  } else if (checkedEl == "mono-btn") {
    colorPicker.setColors(monochromatic());
  } else if (checkedEl == "compl-btn") {
    colorPicker.setColors(complementary());
  } else if (checkedEl == "split-compl-btn") {
    colorPicker.setColors(splitComplementary());
  }
  loadPaletteDisplay(colorPicker.colors);
  var prevActiveIndex = colorPicker.color.index;
  document
    .getElementsByClassName("IroSliderBg")
    [prevActiveIndex].setAttribute(
      "style",
      "stroke: var(--grey) !important; stroke-width: 3px;"
    );
}

// ----- UPDATE PAGE AND DATA FUNCTIONS ------
function loadPaletteDisplay(colors) {
  let displays = document.getElementsByClassName("palette-container")[0]
    .children;
  for (let i = 0; i < displays.length; i++) {
    displays[i].style.backgroundColor = colors[i].rgbString;
  }
}

// ON DOC LOAD
$(document).ready(function () {
  // ----- INITIALIZE -----
  colorPicker = new iro.ColorPicker("#picker", {
    width: 360,
    layoutDirection: "vertical",
    margin: 30,
    handleRadius: 12,
    layout: [
      {
        component: iro.ui.Wheel,
        options: {
          width: 320,
        },
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
          activeIndex: 0,
        },
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
          activeIndex: 1,
        },
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
          activeIndex: 2,
        },
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
          activeIndex: 3,
        },
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
          activeIndex: 4,
        },
      },
    ],
  });

  // set colors randomly when page first loaded
  colorPicker.setColors(defaultRandomizer());
  // load the palette display in the sidebar
  loadPaletteDisplay(colorPicker.colors);
  var prevActiveIndex = colorPicker.color.index;
  document
    .getElementsByClassName("IroSliderBg")
    [prevActiveIndex].setAttribute(
      "style",
      "stroke: var(--grey) !important; stroke-width: 3px;"
    );

  // When color on wheel changes: update palette display
  colorPicker.on("color:change", function (color) {
    loadPaletteDisplay(colorPicker.colors);
  });

  // when active color changes: toggle border for active and previously active sliders
  colorPicker.on("color:setActive", function (color) {
    document
      .getElementsByClassName("IroSliderBg")
      [prevActiveIndex].setAttribute(
        "style",
        "stroke: #fff !important; stroke-width: 0px;"
      );
    document
      .getElementsByClassName("IroSliderBg")
      [colorPicker.color.index].setAttribute(
        "style",
        "stroke: var(--grey) !important; stroke-width: 3px;"
      );
    prevActiveIndex = colorPicker.color.index;
  });

  // --------- SAVING COLOR PALETTE ---------
  // open modal saying palette is saved,
  // auto close and clear input fields
  $("#save-palette-btn").click(function () {
    setTimeout(function () {
      $("#savedModal").modal("toggle");
      document.getElementById("palette-tags-field").value = "";
      document.getElementById("palette-name-field").value = "";
    }, 2500);
  });

  // -------- GENERATING NEW COLOR PALETTE --------
  $("#color-generate-btn").on("click", generateNewPalette);
});
