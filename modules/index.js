const paletteList = document.querySelector(".palette-container");

const setupPalettes = (data) => {

  let html = ''
  data.forEach(doc => {
    const palette = doc.data();
    console.log(palette);
  });
}